export const name="60fps_select";
export const id="dl_f428bd4d6da145188d2c";
export const url=new URL("../icons/6/60fps_select.svg?v=9696c257cc1a51c480ffb5b20b65d88933456c47ec077fe08b5be1fcea3d1727",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
