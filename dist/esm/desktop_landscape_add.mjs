export const name="desktop_landscape_add";
export const id="dl_8021ac4fa2419eed5dee";
export const url=new URL("../icons/desktop_landscape_add.svg?v=fb8b91e9621877965b52a8d8711c873ed95c7be840f61cabeca4050faacfbc9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
