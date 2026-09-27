export const name="ladder-simple";
export const id="dl_22a838da40304b078572";
export const url=new URL("../icons/ladder-simple.svg?v=474635eaae2506c0fb806269e6f7bbe5ed042803b976fbdc1c8f97037cfcf791",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
