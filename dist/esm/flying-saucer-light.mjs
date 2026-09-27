export const name="flying-saucer-light";
export const id="dl_56b223a73a3d471f8c37";
export const url=new URL("../icons/flying-saucer-light.svg?v=803834e7765e0680f166410a1518c675ae6ae1063bf8adddfcd4c3aa2662d262",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
