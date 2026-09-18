export const name="engineering";
export const id="dl_0933b512527743929305";
export const url=new URL("../icons/engineering.svg?v=c417af0ef074c3045fd4564905833e1a531f3303676bdc59ebc37f901221e657",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
