export const name="arrow-square-down-left";
export const id="dl_beb19eeac64e4d3c9e93";
export const url=new URL("../icons/arrow-square-down-left.svg?v=f05c0d9ffe08791e317412d352c34ff4d3fedd58357c95c99e29e55f788d7c9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
