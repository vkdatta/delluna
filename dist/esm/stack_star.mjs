export const name="stack_star";
export const id="dl_2118472bb918497197c7";
export const url=new URL("../icons/stack_star.svg?v=bd44f6ac0f0eddf61fbc045cbed8e772e8b897946a9bddfb344d28b8b48e1ce1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
