export const name="lucid_2-key-square";
export const id="dl_d6085ec4c2244979a5f2";
export const url=new URL("../icons/lucid_2-key-square.svg?v=6b61dae563a097b151f3ee1f96c2022953c186ddd238980b82c9eca94785b6dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
