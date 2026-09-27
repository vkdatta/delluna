export const name="lucid_1-banknote-x";
export const id="dl_be0e4f0492ad4ed9b6f4";
export const url=new URL("../icons/lucid_1-banknote-x.svg?v=21fe4c88ceb1af9575184888ddd2a4338745872928b23b00a1aa201b2d59faf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
