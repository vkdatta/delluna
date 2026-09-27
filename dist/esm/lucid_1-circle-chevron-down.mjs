export const name="lucid_1-circle-chevron-down";
export const id="dl_87cd2d69777049c39e7f";
export const url=new URL("../icons/lucid_1-circle-chevron-down.svg?v=ba03fb3aaeae1892cd9074a6be04f8bc46ff9789b02cd0fc7c13c3271826c658",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
