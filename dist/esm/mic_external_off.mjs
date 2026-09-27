export const name="mic_external_off";
export const id="dl_579230a6658e1445ad5f";
export const url=new URL("../icons/mic_external_off.svg?v=b741a3e343d42806d17c33f4ae90a3e90a3c95446ebe4242dad6d77c90d024aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
