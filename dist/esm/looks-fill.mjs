export const name="looks-fill";
export const id="dl_20b2a25212914c0c8c10";
export const url=new URL("../icons/L/looks-fill.svg?v=33e6cd222d9ba9007cafbb80987a96b167aa75dc57463033ae14acc4a02acd79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
