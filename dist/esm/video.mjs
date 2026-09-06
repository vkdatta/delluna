export const name="video";
export const id="dl_5944b522f0b848b18b94";
export const url=new URL("../icons/video.svg?v=2f9a4c2f955b04570aad0ff3570f61360eb49039c6ee4c9ec4ea363baaaafb33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
