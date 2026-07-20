import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const { name, company, email, material, message } = await req.json();

        // Validate required fields
        if (!name || !email) {
            return Response.json({ error: 'Name and email are required' }, { status: 400 });
        }

        // Save inquiry to database
        await base44.entities.Inquiry.create({
            name,
            company: company || '',
            email,
            material: material || '',
            message: message || '',
            status: 'new'
        });

        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});