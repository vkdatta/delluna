export const name="borg";
export const id="dl_2f2d30c865701dd35121";
export const url=new URL("../icons/borg.svg?v=f09c128fe120d3919e40ed9a00f11862c72a8e05d4db194a97950be5c6c54246",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
