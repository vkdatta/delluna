export const name="stylus_highlighter";
export const id="dl_fe85872219f291ea32d0";
export const url=new URL("../icons/stylus_highlighter.svg?v=d4b5da86bf53732767a906c279dd1f9ae1dfc0bacc6b3a810a9e06e2721d0977",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
