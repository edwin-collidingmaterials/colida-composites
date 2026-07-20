import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const { event, data } = await req.json();

        // Only handle create events
        if (event.type !== 'create') {
            return Response.json({ skipped: 'Not a create event' });
        }

        // Send email notification to info@collidingmaterials.com
        await base44.integrations.Core.SendEmail({
            to: 'info@collidingmaterials.com',
            subject: `New Inquiry from ${data.name} (${data.company})`,
            body: `
NEW INQUIRY SUBMITTED
=====================

CONTACT INFORMATION:
- Name: ${data.name}
- Company: ${data.company}
- Email: ${data.email}

MATERIAL REQUIREMENTS:
- Material Type: ${data.material || 'Not specified'}

ADDITIONAL REQUIREMENTS:
${data.message || 'None'}

---
View all inquiries in your Base44 dashboard
            `
        });

        return Response.json({ success: true, message: 'Email sent' });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});