export const name="landslide";
export const id="dl_e94deb64041137ed8e4e";
export const url=new URL("../icons/landslide.svg?v=4823c91728fc66a3df92647d85c9fce7c389ecb01eccbd3ba8a6852647cccefb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
