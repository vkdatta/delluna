export const name="stack_star";
export const id="dl_078765ccc8ad325b6e78";
export const url=new URL("../icons/stack_star.svg?v=f77f204518396215559b382a1bb830d1370b83621899bb3d7fef738bab4a7440",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
