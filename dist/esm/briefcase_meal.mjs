export const name="briefcase_meal";
export const id="dl_0ccbf185e3864885b8c0";
export const url=new URL("../icons/briefcase_meal.svg?v=c9e1e3a10ecfeff20998be36fbb2306158025983b724c9a5464f512d5969bfbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
