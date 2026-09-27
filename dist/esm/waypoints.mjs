export const name="waypoints";
export const id="dl_eea846d488f3468f9765";
export const url=new URL("../icons/waypoints.svg?v=0dab36623709158f5aff244c826f7c1881f1d3bd60bb92710e77d19db0b7b15a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
