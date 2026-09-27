export const name="doorbell_3p-fill";
export const id="dl_284220b176ef04424dd5";
export const url=new URL("../icons/doorbell_3p-fill.svg?v=6e36117165727c24975d91362533fd232042fb404fab3a70c5f489ef701914e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
