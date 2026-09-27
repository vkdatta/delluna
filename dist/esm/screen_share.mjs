export const name="screen_share";
export const id="dl_40d2f4d56e487593b7c0";
export const url=new URL("../icons/screen_share.svg?v=397e3c4fa9cd4ae6df825744c74eea4b073fc18b5d47a1a6f76d3650f7c74643",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
