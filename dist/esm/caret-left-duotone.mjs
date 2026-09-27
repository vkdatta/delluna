export const name="caret-left-duotone";
export const id="dl_e74bf2f7f6574e11a6d0";
export const url=new URL("../icons/caret-left-duotone.svg?v=480a080da9000069a812e714fb298e9dd124db70104810a96e39e47290c6a659",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
