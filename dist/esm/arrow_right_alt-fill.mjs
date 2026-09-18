export const name="arrow_right_alt-fill";
export const id="dl_7efa70d653a84153b470";
export const url=new URL("../icons/arrow_right_alt-fill.svg?v=1605f29d42dc412e03a1a96e9d5b7149fb066eae53f5168b406131d65078e0e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
