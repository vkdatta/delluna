export const name="lucid_3-phone-call";
export const id="dl_43664c461e5542ee9988";
export const url=new URL("../icons/lucid_3-phone-call.svg?v=a6f444439d3008b4b8e79fb0022f092882845effef68a45d4e07ff54f30fe4bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
