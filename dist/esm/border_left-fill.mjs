export const name="border_left-fill";
export const id="dl_dfd127966cde889eb462";
export const url=new URL("../icons/border_left-fill.svg?v=219a4831145c0afd6a7039b0f8c33fcdd6e8a0c643637e84b838da02f2eb52c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
