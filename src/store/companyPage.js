export default {
    namespaced: true,
    state: {
        name: 'Microsoft',
        location: 'Redmond, WA, USA',
        about: 'At Microsoft, out mission is to empower every person and every organization on the planet to achieve more. Our mission is grounded in both the world in which we live and the future we strive to create.',
        activities: [
            {
                date: '8 days ago',
                icon: 'play.png',
                richtext: `<span class="activity-owner">Cloud Ochestration</span>
                    replaced
                    <span class="activity-victim">Microsoft</span>
                    on
                    <span class="activity-action-info">1 property</span>`,
            },
            {
                date: '10 days ago',
                icon: 'globe.png',
                richtext: `<span class="activity-owner">Express Scripts</span>
                    replaced
                    <span class="activity-victim">Microsoft</span>
                    on
                    <span class="activity-action-info">1 property</span>`,
            },
            {
                date: '12 days ago',
                icon: 'security.png',
                richtext: `<span class="activity-owner">Kaiser Permanente</span>
                    replaced
                    <span class="activity-victim">Microsoft</span>
                    on
                    <span class="activity-action-info">1 property</span>`,
            },
            {
                date: '14 days ago',
                icon: 'traffic.png',
                richtext: `<span class="activity-owner">Molina Healthcare</span>
                    replaced
                    <span class="activity-victim">Microsoft</span>
                    on
                    <span class="activity-action-info">1 property</span>`,
            },
            {
                date: '15 days ago',
                icon: 'dns.png',
                richtext: `<span class="activity-owner">Express Scripts</span>
                    replaced
                    <span class="activity-victim">Microsoft</span>
                    on
                    <span class="activity-action-info">1 property</span>`,
            },
            {
                date: '16 days ago',
                icon: 'performance.png',
                richtext: `<span class="activity-owner">Kaiser Permanente</span>
                    replaced
                    <span class="activity-victim">Microsoft</span>
                    on
                    <span class="activity-action-info">1 property</span>`,
            },
            {
                date: '17 days ago',
                icon: 'saas.png',
                richtext: `<span class="activity-owner">Molina Healthcare</span>
                    replaced
                    <span class="activity-victim">Microsoft</span>
                    on
                    <span class="activity-action-info">1 property</span>`,
            },
            {
                date: '18 days ago',
                icon: 'globe.png',
                richtext: `Microsoft launched M-Cloud`,
            },
        ],
        similarCompanies: [
            {
                logo: 'logo-small-aws.png',
                name: 'Amazon Web Services (AWS)',
            },
            {
                logo: 'logo-small-oracle.png',
                name: 'Oracle Corporation',
            },
        ],
        spendHistory: [
            {
                logo: 'logo-small-tech.png',
                name: 'Google Cloud Platform,',
                description: 'Microsoft spend on product $500,000',
            },
            {
                logo: 'logo-small-tech2.png',
                name: 'CenturyLink CDN,',
                description: 'Microsoft spend on product $300,000',                        
            },
        ],
    },
}