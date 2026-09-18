export const name="hide_source";
export const id="dl_8ba29d5964764ec691ae";
export const url=new URL("../icons/hide_source.svg?v=d7ee9fe09521b3fb296ed6eb91db8555428aad949642bad221a1532e172c5ea8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
