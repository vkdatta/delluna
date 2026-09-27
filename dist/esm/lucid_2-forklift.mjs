export const name="lucid_2-forklift";
export const id="dl_0dbfddad55aa470ab3a1";
export const url=new URL("../icons/lucid_2-forklift.svg?v=6844de7f7e96ee15f6c723e67248b070a8dd88aeb4aed0a200148629eaa94fdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
