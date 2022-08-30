import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
        <section class="space-y-6">
            <assignment-list title="In Progress" :assignments="filters.inProgress"></assignment-list>
            <assignment-list title="Completed" :assignments="filters.completed"></assignment-list>

            <assignment-create @add="add"></assignment-create>
            
        </section>

    `,
    data() {
        return {
            assignments: []
        }
    },

    created() {
        fetch("http://localhost:3001/assignments")
            .then(response => response.json())
            .then(assignments => this.assignments = assignments)
    },
    
    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(a => ! a.isComplete),
                completed: this.assignments.filter(a => a.isComplete)
            };
        }
    },

    methods: {
        add(name) {
            this.assignments.push({
                title: name,
                isComplete: false,
                id: this.assignments.length + 1
            });
        }
    },
}