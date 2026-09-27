export const name="trash-simple-fill";
export const id="dl_ba6712e9162b83220f47";
export const url=new URL("../icons/trash-simple-fill.svg?v=6a91ce7472dd2cff303b852c4c30bfe8d2fca41fee5564d731f2563ee8047513",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
