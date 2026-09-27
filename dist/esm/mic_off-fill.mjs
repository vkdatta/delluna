export const name="mic_off-fill";
export const id="dl_4bc135d7468af1e14643";
export const url=new URL("../icons/mic_off-fill.svg?v=604c8844cf77bf7ca3c15e925af1415fbb8d499a607f0490e736eac6c89ff3de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
