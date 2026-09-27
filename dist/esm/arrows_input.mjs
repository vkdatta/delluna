export const name="arrows_input";
export const id="dl_1d24dd0d521c490dfd52";
export const url=new URL("../icons/arrows_input.svg?v=537b927e3fddb81cab8007ed54d3e1be713e153e1f3fc0965a0a85744265429c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
