export const name="sticker-duotone";
export const id="dl_584712945e744c5b947c";
export const url=new URL("../icons/S/sticker-duotone.svg?v=dd568b8b3ecef94e8e5a86c825cf1f21c084a918ab7662d84029bc3ff61117c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
