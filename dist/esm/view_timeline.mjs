export const name="view_timeline";
export const id="dl_4649697c0ea99904758f";
export const url=new URL("../icons/view_timeline.svg?v=6b708faf72de5e59af7a1dba7bd4550ad17f9c81b7bd366f8829d561e3bf620d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
