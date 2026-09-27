export const name="lucid_1-air-vent";
export const id="dl_6829cf83da0d41e0b4be";
export const url=new URL("../icons/lucid_1-air-vent.svg?v=7c0a9f9145783caeab673df8d86c957248f4de690edb79a55dbfaa770056f0bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
