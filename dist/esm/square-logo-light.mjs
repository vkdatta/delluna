export const name="square-logo-light";
export const id="dl_e9d9493a8533b89b0047";
export const url=new URL("../icons/square-logo-light.svg?v=491b82af6f7c35261a0140446971aef4aba12f15c3d50064269ad7b51f63b2d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
