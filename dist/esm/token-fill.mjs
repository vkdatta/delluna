export const name="token-fill";
export const id="dl_a97367664f2b20271ba5";
export const url=new URL("../icons/token-fill.svg?v=1fb6cfd673ed1b8e478daf1bd090d6fa791c68cdc9e38c21d43e18ae565c63a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
