export const name="paste";
export const id="dl_445434bff2fc67acf7e7";
export const url=new URL("../icons/paste.svg?v=233595b1a1892ee0b390300f0df0b3b9bfd18a2d2a87418b01ae907416902066",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
