export const name="convert_to_text-fill";
export const id="dl_35a2c69808606301967b";
export const url=new URL("../icons/convert_to_text-fill.svg?v=ac3711f3b6e645d722885c756c6e394a1ced513a924f7e3f1cc63e29d19ae1bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
