export const name="lucid_2-file-signal";
export const id="dl_2a9cf0bc79844ffa8059";
export const url=new URL("../icons/lucid_2-file-signal.svg?v=9ddbfdd9b67643b1f510206c0d40fd3811af9d813eb88f77f38a6ed176386340",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
