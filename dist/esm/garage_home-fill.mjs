export const name="garage_home-fill";
export const id="dl_f0cfa0460b8c9ff1ee4e";
export const url=new URL("../icons/garage_home-fill.svg?v=f43ad2597463a82f0b365b74c5261908edd8faf8c59dd0c315d57462ca8c6edd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
