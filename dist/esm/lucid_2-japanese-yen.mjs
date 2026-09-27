export const name="lucid_2-japanese-yen";
export const id="dl_2ebe0219c0ca49649c0c";
export const url=new URL("../icons/lucid_2-japanese-yen.svg?v=6bcffa7c6e45d5876f02269dd3134ae287d554280821629621abebf6e69880a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
