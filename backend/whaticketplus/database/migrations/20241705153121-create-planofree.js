module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Plans', [{
                id: 100,
                name: 'planofree',
                memory: 1,
                users: 1,
                connections: 1,
                queues: 3,
                amount: '0',
                useWhatsapp: true,
                useFacebook: true,
                useInstagram: true,
                useCampaigns: true,
                useSchedules: true,
                useInternalChat: true,
                useExternalApi: true,
                useTypebot: true,
                useN8n: true,
                useChatGPT: true,
                createdAt: new Date(),
                updatedAt: new Date()
            }], {});
    },
    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Plans', { id: 100 }, {});
    }
};
