export const name="home_repair_service-fill";
export const id="dl_628461dcdc274bd1b8e9";
export const url=new URL("../icons/home_repair_service-fill.svg?v=54b7960aed4136124c8e42218eecc12e1ce122d43690e74f07c948279d6c4047",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
