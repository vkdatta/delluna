export const name="add_a_photo-fill";
export const id="dl_8bd152824e28f273dfab";
export const url=new URL("../icons/add_a_photo-fill.svg?v=1930770c90d5f33cb4d39151d3cf017fb36bf3fd7038e80d457ac57e830302fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
