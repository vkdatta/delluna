export const name="branding_watermark-fill";
export const id="dl_527e55a54b2745048f58";
export const url=new URL("../icons/B/branding_watermark-fill.svg?v=90e9944a5800fdbe0d381baa909e4e9c3da89c85c5831518eb0ca6d795818a82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
