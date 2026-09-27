export const name="guitar-duotone";
export const id="dl_22fce0380f774373b77e";
export const url=new URL("../icons/guitar-duotone.svg?v=82c1213280a8668859d0ec2212da5559c35a2b62f97dd7aa7ca4d31331266c92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
