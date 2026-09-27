export const name="location_home";
export const id="dl_b3bd813264727f64146b";
export const url=new URL("../icons/location_home.svg?v=39f04fc88286bac3b62dd60246ea7a5d7c2dcf5b937c415197a40a739d297d07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
