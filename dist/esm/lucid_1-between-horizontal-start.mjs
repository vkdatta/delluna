export const name="lucid_1-between-horizontal-start";
export const id="dl_b9721fa3725e45cb96ca";
export const url=new URL("../icons/lucid_1-between-horizontal-start.svg?v=750e54492075b91264506622146e54f795fc6bffd6c8eb5496fe8a75b5ca8155",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
