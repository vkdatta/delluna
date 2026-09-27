export const name="solar-roof-fill";
export const id="dl_50baeceb7deccafe1085";
export const url=new URL("../icons/solar-roof-fill.svg?v=d869b9e83209b48c5a15f4c541089390c33a65b2b64ff1540eb873abc9dd8554",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
