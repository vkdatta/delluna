export const name="lucid_3-spade";
export const id="dl_0d5a860776a74001ac25";
export const url=new URL("../icons/lucid_3-spade.svg?v=a1aaad2ec632f4c86b8282fbd1fd53f1e62716159850ed7e0f8cc3be42d5aa77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
