export const name="timelapse";
export const id="dl_5745c8114fe277322f33";
export const url=new URL("../icons/timelapse.svg?v=e2236924006d0daac4aa7647aa1029b6ab26305be46d5f125da84d4071b1fc57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
