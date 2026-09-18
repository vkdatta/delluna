export const name="rotate_90_degrees_ccw-fill";
export const id="dl_5b44872fd67746829682";
export const url=new URL("../icons/rotate_90_degrees_ccw-fill.svg?v=2d57aead85753fc09d42da86675eb650a2e753965740246ca270b244ab96553a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
