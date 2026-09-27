export const name="speaker-simple-high-thin";
export const id="dl_35a771ef7072a3155674";
export const url=new URL("../icons/speaker-simple-high-thin.svg?v=9da7ee84f9d6c04db9fca6e6e789e9b2373afc2633f63277d3f94d15c18f2710",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
