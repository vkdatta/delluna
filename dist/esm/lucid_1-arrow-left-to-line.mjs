export const name="lucid_1-arrow-left-to-line";
export const id="dl_bd3995c1cefc4046a7de";
export const url=new URL("../icons/lucid_1-arrow-left-to-line.svg?v=f0e9963162eab390bf1c974ba52316b3da4afee9ca997006c329a1c4fe93c7cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
