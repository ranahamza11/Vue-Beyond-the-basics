import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js";
export default {
    components: {
        Assignment,
        AssignmentTags
    },
    template: `
        <section v-show="assignments.length" class="w-60">
            <div class="flex items-start justify-between">
                <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{ assignments.length }})</span>
                </h2>

                <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
            </div>

            <assignment-tags 
                v-model:currentTag="currentTag"
                :tags="['all', ...new Set(this.assignments.map(a => a.tag))]" 
            />

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-4">
                <assignment 
                    v-for="assignment in filteredAssignments" 
                    :key="assignment.id"
                    :assignment="assignment"
                    >
                </assignment>      
            </ul>  

            <slot />
        </section>
    `,
    

    props: {
        assignments: Array,
        title: String,
        canToggle: { type: Boolean, default: false }
    },

    data() {
        return {
            currentTag: 'all'
        };
    },

    computed: {
        filteredAssignments() {
            if(this.currentTag === 'all') {
                return this.assignments;
            }

            return this.assignments.filter(a => a.tag === this.currentTag);
        },
       
    },

}