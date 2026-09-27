export const name="baby-thin";
export const id="dl_9b1257bef9044c04b4a9";
export const url=new URL("../icons/baby-thin.svg?v=c759e3bd476b7d035c19c538abc8542131b2908616449a069ddba4e82999d24d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
