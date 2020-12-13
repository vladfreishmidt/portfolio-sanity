import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: '58mbs2fa',
    dataset: 'production',
    useCdn: true
});