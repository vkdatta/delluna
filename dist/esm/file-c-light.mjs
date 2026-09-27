export const name="file-c-light";
export const id="dl_fc31732803be421ab17b";
export const url=new URL("../icons/file-c-light.svg?v=e0b5f528906494a46e98248d203b12a207be2af72c7f07dc5d600a2648ba4686",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
