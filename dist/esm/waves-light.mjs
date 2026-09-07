export const name="waves-light";
export const id="dl_ec429af855854222a752";
export const url=new URL("../icons/W/waves-light.svg?v=5fee50ce06f7f97b1ee0cb4849a8ebb52aec677455674839e89fdbd6533b5f12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
