export const name="bowl-steam-duotone";
export const id="dl_9747f93412e44fd49008";
export const url=new URL("../icons/bowl-steam-duotone.svg?v=b8dc7aad88a66dac564cdf34cd0260118345e688c2fbd29d5eef7300b88b9403",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
