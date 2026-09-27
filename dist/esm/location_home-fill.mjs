export const name="location_home-fill";
export const id="dl_229f83b9bc9b01847096";
export const url=new URL("../icons/location_home-fill.svg?v=8602f46dc9d937be60086d950c3b7f555744721d887b95be8207dd5a95311f16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
