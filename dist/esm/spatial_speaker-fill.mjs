export const name="spatial_speaker-fill";
export const id="dl_0b21fcb6a8e04c8898ee";
export const url=new URL("../icons/S/spatial_speaker-fill.svg?v=724f95466caeaea78e48eff1b799d054fb862cfd747e903bd8069bb50bbb5be6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
