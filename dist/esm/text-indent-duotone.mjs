export const name="text-indent-duotone";
export const id="dl_eac37548f9fa0a7060fc";
export const url=new URL("../icons/text-indent-duotone.svg?v=578caffec146baeb31c4adc70b59c80ece8af19ba42429d8f50317679dafc904",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
