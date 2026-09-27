export const name="tilt_arrow_down-fill";
export const id="dl_5cee03859586d7e4b20b";
export const url=new URL("../icons/tilt_arrow_down-fill.svg?v=69a66563673b3bf8f7e5a8fd6ab26e0e997921e765d1abb7cc0509656fa822d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
