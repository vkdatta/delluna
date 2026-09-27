export const name="script_f";
export const id="dl_55dfb92c0c434c699787";
export const url=new URL("../icons/script_f.svg?v=df80128ff27f9f98639fc3cd74b735b2ee4c8c2388693501bf7764d4d7084a50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
