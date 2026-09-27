export const name="padel-fill";
export const id="dl_f50c7862b4f57258d506";
export const url=new URL("../icons/padel-fill.svg?v=1c769e9b3d42caca76286c79a75b9c96f7bbba564c1308ca43c771b0cacf297e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
