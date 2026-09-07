export const name="shield-star-light";
export const id="dl_d3f9dedf88c943d39b5a";
export const url=new URL("../icons/S/shield-star-light.svg?v=0b1b7d0b1b1d96ccaf1e52bc69ad0b2045e3d38162ae15a6457f1ffd8c25642f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
