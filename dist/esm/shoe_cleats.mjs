export const name="shoe_cleats";
export const id="dl_040c5dfabbdd44c4ae8c";
export const url=new URL("../icons/S/shoe_cleats.svg?v=ddde2cd277d9150bf829c21a96400c9dac58fcc6fa6e1918658670b39774d299",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
