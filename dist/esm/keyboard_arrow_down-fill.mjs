export const name="keyboard_arrow_down-fill";
export const id="dl_425240d97f174d7fbb2f";
export const url=new URL("../icons/keyboard_arrow_down-fill.svg?v=94ec4098859bfb3090786be58194e0a74ed316dd26ba2b595b396d154da6ba37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
