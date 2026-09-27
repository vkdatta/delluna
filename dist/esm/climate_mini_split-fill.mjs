export const name="climate_mini_split-fill";
export const id="dl_c12a50003af3182ee20e";
export const url=new URL("../icons/climate_mini_split-fill.svg?v=d66e12d90bff6fffa68c8c4e918fc1ec922dfd83d5d27f4e02dbe73cb019b403",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
