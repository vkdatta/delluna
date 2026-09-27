export const name="lucid_2-engine";
export const id="dl_b228840a3f5e4bcf9892";
export const url=new URL("../icons/lucid_2-engine.svg?v=260620f0b3dc327d1ca7a8924771ac9dcb3eccd87d0ba4bdaa037084ff3de545",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
