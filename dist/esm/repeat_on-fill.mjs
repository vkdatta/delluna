export const name="repeat_on-fill";
export const id="dl_a264971e3fd537f780e8";
export const url=new URL("../icons/repeat_on-fill.svg?v=3c9476c8e485807c3a3479ef01ee57e3154c7cce9983e9932cf263dda79f11f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
