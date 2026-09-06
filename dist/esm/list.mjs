export const name="list";
export const id="dl_ee7a5ba65441414abec5";
export const url=new URL("../icons/list.svg?v=fb1851842c74b40a3f42ce3d6ae0e67ede556b624218e79c0f4ead7d9ceec51f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
