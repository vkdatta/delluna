export const name="network_locked-fill";
export const id="dl_24f48de496b38ca9c691";
export const url=new URL("../icons/network_locked-fill.svg?v=5aa331a847d626bdb449bf0ac17d48af910471e02f5ff3f3b365f4a064d90b1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
