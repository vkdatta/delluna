export const name="airplanemode_inactive-fill";
export const id="dl_8d4fe9068a846d9ea647";
export const url=new URL("../icons/airplanemode_inactive-fill.svg?v=2d7522206f52ae0d195414418108bcf48ec52c4c8d982a83c6d11f35969df436",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
