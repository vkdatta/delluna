export const name="lucid_1-carrot";
export const id="dl_0fea61e868384822bd1f";
export const url=new URL("../icons/lucid_1-carrot.svg?v=7af4afcbe11f11a4acead5f7e767596486e3bee954e7d63b5b046a1bac551d12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
