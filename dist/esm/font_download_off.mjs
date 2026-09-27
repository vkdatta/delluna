export const name="font_download_off";
export const id="dl_5347766b4a48f5a84cfc";
export const url=new URL("../icons/font_download_off.svg?v=ada8b1cdb31b254aeb0068d8f1d3b347a98ed3b75c54c0cd3719c89fdd918276",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
