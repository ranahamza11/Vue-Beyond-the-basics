export default {
    template: `
        <li>
            <label class="p-2 flex justify-between items-center">
                {{ assignment.title }}
                <input type="checkbox" v-model="assignment.isComplete" class="ml-3">
            </label>
        </li>
        
    `,
    props: {
        assignment: Object
    }

}