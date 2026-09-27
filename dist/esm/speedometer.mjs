export const name="speedometer";
export const id="dl_34a2dbda1f7a5d304d96";
export const url=new URL("../icons/speedometer.svg?v=c61612602bd9d04bbb7eb4b4970d2630b0da75754d4249065f4ebfeba8e614c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
