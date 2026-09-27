export const name="lucid_1-cannabis";
export const id="dl_e6e5aabf860144c3806c";
export const url=new URL("../icons/lucid_1-cannabis.svg?v=b1e687b5c3469a3b5e68560695fe59f4122e45993b15e68283fe77796df4772e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
