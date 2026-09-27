export const name="stethoscope-fill";
export const id="dl_72a96a4abffbeef29db8";
export const url=new URL("../icons/stethoscope-fill.svg?v=85ee65276c1c50b38f0894695fb8046a7dfd01905584aa7d63283f605814d6e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
