export const name="relax-fill";
export const id="dl_205f8cafeef6db86c783";
export const url=new URL("../icons/relax-fill.svg?v=1a391e54c00e4826176d998fcb33f21129eb2540f6e038750066b4b8f773b6ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
