export const name="fan_indirect-fill";
export const id="dl_a67f7f5ce56346d7a33a";
export const url=new URL("../icons/F/fan_indirect-fill.svg?v=1fbd9a41dd069eaf99d1f6656c7bff2e25f4ca580c117ae4a5603b0c29175aa8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
