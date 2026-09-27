export const name="water_damage-fill";
export const id="dl_f26e5e44f772ad81c70e";
export const url=new URL("../icons/water_damage-fill.svg?v=2df6b704fdbfe3023babbf10f22c28bb492832334cb999b324462df61ec1825c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
