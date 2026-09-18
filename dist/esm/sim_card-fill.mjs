export const name="sim_card-fill";
export const id="dl_68f94119953741afa8a5";
export const url=new URL("../icons/sim_card-fill.svg?v=963d04cb04d45e0e59c58adaa719c8d6d40d39b9dde3f6b3c1df7e467548c570",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
