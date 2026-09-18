export const name="nest_detect";
export const id="dl_a17aa1cd1ef1472982d7";
export const url=new URL("../icons/nest_detect.svg?v=c504d575b5560f3cd7f385e53cb53f251038d9e7a975d21b96cee0f05d032cab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
