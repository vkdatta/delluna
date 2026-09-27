export const name="arrow-arc-left";
export const id="dl_322cfcb0853a4a3380a1";
export const url=new URL("../icons/arrow-arc-left.svg?v=522483005b24208465ce724358c0f2169342f5d1740075d99ecd18ae8dc0f048",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
