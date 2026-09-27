export const name="folder_off";
export const id="dl_07920f6ffbc5f488d542";
export const url=new URL("../icons/folder_off.svg?v=d04f4f7cc318a2ca96a531b2f74d51f63bf31ad89169cc142e7c415b4a6a014e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
