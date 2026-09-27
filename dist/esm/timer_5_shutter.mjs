export const name="timer_5_shutter";
export const id="dl_99a0f5326bff10604060";
export const url=new URL("../icons/timer_5_shutter.svg?v=3e3e95f44e78d14eacadb5f7443d66acd52685cf8b8a44184d1d136d4dd4f088",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
