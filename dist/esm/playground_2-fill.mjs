export const name="playground_2-fill";
export const id="dl_dea18b340c82d5729d94";
export const url=new URL("../icons/playground_2-fill.svg?v=026b75d1fa2aaf80577774f0a18a7a10bc48aa1f346be498a95031b9da0e8a9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
