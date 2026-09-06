export const name="number-square-three";
export const id="dl_827bd0b2e5a24b1d8944";
export const url=new URL("../icons/number-square-three.svg?v=6b6c5b62c86c84a8c3644967813434c52fb5271309ade61a93fe80be8099829f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
