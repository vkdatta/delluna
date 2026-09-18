export const name="bia-fill";
export const id="dl_88bf2b5d958449aa8f47";
export const url=new URL("../icons/bia-fill.svg?v=9a8c1cb882c855d9887132a0e76d524c43e6296e549a879e5058d74ee25e33c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
