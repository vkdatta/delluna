export const name="lucid_2-dice-5";
export const id="dl_6324d3606f534fbea30c";
export const url=new URL("../icons/lucid_2-dice-5.svg?v=f13e23d6e92c5c3e405033e3d3f3bc13f21471b94428f914e488d987081b40fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
