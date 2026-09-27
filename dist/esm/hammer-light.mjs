export const name="hammer-light";
export const id="dl_d34d9d4e52a14b99aa73";
export const url=new URL("../icons/hammer-light.svg?v=f96e99bb16b6aee15ce566fc3b3194944bfd57b63060f2aa1d22290529d78740",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
