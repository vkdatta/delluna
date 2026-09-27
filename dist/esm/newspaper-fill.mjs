export const name="newspaper-fill";
export const id="dl_e76fa77614e14ec4939f";
export const url=new URL("../icons/newspaper-fill.svg?v=f287f6548fc662584e379613059310288a924deda8180698ee2210b1df74c580",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
