export const name="text-h-two-light";
export const id="dl_efb27cbaeeef7b4aa5ca";
export const url=new URL("../icons/text-h-two-light.svg?v=8743a58cdb5e85d1abfd730aa06a24ac01ab676fd30a58cea24471317e7c9027",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
