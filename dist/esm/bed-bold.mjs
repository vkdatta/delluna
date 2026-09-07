export const name="bed-bold";
export const id="dl_d8187d7e7f4b486ca2a7";
export const url=new URL("../icons/bed-bold.svg?v=8a1eff3febb3b4652b2d3874c5ae3e31afee67b3257defb28aa790c1874df245",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
