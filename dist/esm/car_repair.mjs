export const name="car_repair";
export const id="dl_ab2369c9c524fd94e194";
export const url=new URL("../icons/car_repair.svg?v=712247b8514271f54c7c37810e08798a50115508f99e2bd74b2b8af418af8c75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
