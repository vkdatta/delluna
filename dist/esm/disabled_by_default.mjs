export const name="disabled_by_default";
export const id="dl_c65ec54247f14fe5b912";
export const url=new URL("../icons/D/disabled_by_default.svg?v=819004d2d8da4c58fe3e84cf116700cc1409bdde91e8e17b3d6ab0db34801b8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
