export const name="arrow-u-up-left-fill";
export const id="dl_58d0b9de28eb494a96ca";
export const url=new URL("../icons/arrow-u-up-left-fill.svg?v=c4e7656a5cb895b0d98627599f0e255bfc122e47d017ca11fc92e3b5f06a4b6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
