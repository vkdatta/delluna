export const name="lucid_3-rectangle-horizontal";
export const id="dl_b2022b863a154dc7bbe8";
export const url=new URL("../icons/lucid_3-rectangle-horizontal.svg?v=b8f0ad4211fa089da3792ba1d05b81cd43e84fcab41c1bc1dddda45f913f2d6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
