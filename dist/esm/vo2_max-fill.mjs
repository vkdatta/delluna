export const name="vo2_max-fill";
export const id="dl_6fa49474758adc53c5ec";
export const url=new URL("../icons/vo2_max-fill.svg?v=aa8cf740b2a8b128a0a6199190579a5f4734d45f251086765d65e7695d17721a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
