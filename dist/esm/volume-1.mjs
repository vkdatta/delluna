export const name="volume-1";
export const id="dl_28cbdd01083a4ee8959f";
export const url=new URL("../icons/volume-1.svg?v=73d8ca9efd4b8d465b5878d0ed75f6ba68ebef068d5317374c41b891daa8254e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
