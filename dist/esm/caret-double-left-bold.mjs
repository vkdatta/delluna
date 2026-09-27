export const name="caret-double-left-bold";
export const id="dl_940db14b3d3e437bba43";
export const url=new URL("../icons/caret-double-left-bold.svg?v=f8900f5dcc86678500f0f738f8a4b2b3bf32f2dd68d1b50bd28d17ff5b4e3fa2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
