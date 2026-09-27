export const name="eyedropper-fill";
export const id="dl_7de63493682e43609a4d";
export const url=new URL("../icons/eyedropper-fill.svg?v=dc8b7856d4ed135553e34d134baa49bd96b000a70e07c7dff57d217e958b81ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
