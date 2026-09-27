export const name="respiratory_rate";
export const id="dl_82e3fc88c1006a35c8bf";
export const url=new URL("../icons/respiratory_rate.svg?v=403f7270aeea06709539f0bd6f97c5d5c5d2d6e3e325a1d016ca61c363323f76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
