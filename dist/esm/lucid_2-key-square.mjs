export const name="lucid_2-key-square";
export const id="dl_d6085ec4c2244979a5f2";
export const url=new URL("../icons/lucid_2-key-square.svg?v=021ca45eddf7b37775b0bde8086a1681c5e4f8ea0cb7229991c35fc7c91d7248",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
