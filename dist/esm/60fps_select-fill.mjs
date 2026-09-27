export const name="60fps_select-fill";
export const id="dl_74341599e7f610689eb6";
export const url=new URL("../icons/60fps_select-fill.svg?v=faf9c63bb309df35d33956ac64b3b7ec6adbe2bf4fe2f06b9ed70ae06f69e5dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
