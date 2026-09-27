export const name="lucid_1-bookmark-off";
export const id="dl_7e9f4cd3736e4528b550";
export const url=new URL("../icons/lucid_1-bookmark-off.svg?v=64fc7ed9a7fce61c94522df3bee94c6c9153075774e49259735364a4282b4729",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
