export const name="extension_off";
export const id="dl_eab4b966d009872be348";
export const url=new URL("../icons/extension_off.svg?v=96b866d323eb32530e05244c5951e9ff26fb926b9b8b59aa7ab37e413ba40dc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
