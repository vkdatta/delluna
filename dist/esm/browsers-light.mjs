export const name="browsers-light";
export const id="dl_52bbe820156e4784bae7";
export const url=new URL("../icons/browsers-light.svg?v=528508fc65f96d5df18962d04a1da434d70b86138a432b727038bcfd83f295f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
