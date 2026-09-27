export const name="folder_open-fill";
export const id="dl_fb3211b7c0aa6ff2ed56";
export const url=new URL("../icons/folder_open-fill.svg?v=5698a9ce77518f2adc150020c4993a98dc37f38aa82be7f0e9eabe03bc2b2f26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
