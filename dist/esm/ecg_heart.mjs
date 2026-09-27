export const name="ecg_heart";
export const id="dl_5a249f09402fca133d61";
export const url=new URL("../icons/ecg_heart.svg?v=4e42965cc0e6941246d5f33220c16d73b317ef73aea95060cf13a54cf81de4e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
