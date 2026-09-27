export const name="battery-high-bold";
export const id="dl_cb8591dae2b64e609b2a";
export const url=new URL("../icons/battery-high-bold.svg?v=64b0193f503c4fb96bacb64c4fbfec299f8f8f18d2452c413432474e774dfab7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
