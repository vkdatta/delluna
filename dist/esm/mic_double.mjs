export const name="mic_double";
export const id="dl_713bb628850a1ecfac49";
export const url=new URL("../icons/mic_double.svg?v=5e1e9cfc4345595269c972ceb12e12a2b46c49edc21c34a8a741080b249fe0c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
