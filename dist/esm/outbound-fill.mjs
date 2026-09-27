export const name="outbound-fill";
export const id="dl_4ef5dc30baf9cc2733bc";
export const url=new URL("../icons/outbound-fill.svg?v=71da113badf7c83cf3fc4f70fa83c8a59b05478ac6550ab8a8d5ffbda8d14546",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
