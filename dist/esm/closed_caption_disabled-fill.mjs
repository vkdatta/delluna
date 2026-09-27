export const name="closed_caption_disabled-fill";
export const id="dl_fdc7860347593ec67304";
export const url=new URL("../icons/closed_caption_disabled-fill.svg?v=cf3dec48d1c2c8aa89a500e80d40714ffd9ba27b4764bd2a7633d4ab726bb51f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
