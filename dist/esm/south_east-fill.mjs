export const name="south_east-fill";
export const id="dl_934133157a6cac98d31a";
export const url=new URL("../icons/south_east-fill.svg?v=93df60ee013277dbb3ebc983f7e65435672eeb07da983878c6892652a6dc7bcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
