export const name="number-two-light";
export const id="dl_826feccf59484b3baf0e";
export const url=new URL("../icons/number-two-light.svg?v=9167aeb2e0f4c6650b082d45e1b1735767329610d02825ccba46aec04d862752",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
