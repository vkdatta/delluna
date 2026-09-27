export const name="lucid_3-refresh-cw";
export const id="dl_1c349bfc524944fa9234";
export const url=new URL("../icons/lucid_3-refresh-cw.svg?v=a6d1a2506bb12bb58361e76b5fb256a625821d14a26d12c7a39625ed11dd8d71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
