export const name="lucid_3-rotate-ccw-clock";
export const id="dl_c84fdcb5c2ef4728afc6";
export const url=new URL("../icons/lucid_3-rotate-ccw-clock.svg?v=30388ea5b2fb95bd5764cb588f1031107731c5d1171b36ce73422057b10c4892",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
