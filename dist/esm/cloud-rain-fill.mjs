export const name="cloud-rain-fill";
export const id="dl_c734f40641f24594852c";
export const url=new URL("../icons/cloud-rain-fill.svg?v=24359fc30fc9b65d4ecee28adf05be34130df777885bfd29c6539d17074ad714",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
