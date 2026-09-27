export const name="eye-bold";
export const id="dl_095f51394d324875847f";
export const url=new URL("../icons/eye-bold.svg?v=19333a36dd1547fe37730a91b940abf150bd0383d5d2742f811be7a868384fb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
