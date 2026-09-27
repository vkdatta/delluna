export const name="tablet";
export const id="dl_bc36c5e8381e4ed3beed";
export const url=new URL("../icons/tablet.svg?v=52396f502cf450e915bcca74185947488ae7ead0b581107163302018fd898bb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
