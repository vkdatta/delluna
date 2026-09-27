export const name="home_max";
export const id="dl_2dada501305bb5480a08";
export const url=new URL("../icons/home_max.svg?v=f91c70c64ffbe3451b58cc97e164757cae4e51ebdee3af88650bc8c80fee5431",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
