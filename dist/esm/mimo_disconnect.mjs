export const name="mimo_disconnect";
export const id="dl_c17e476de12f42c5834a";
export const url=new URL("../icons/M/mimo_disconnect.svg?v=a2367545eaa0cbde028e7859fc66a303f37bab977236593eea0103857ef7b09a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
