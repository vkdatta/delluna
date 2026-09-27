export const name="mouse-middle-click-fill";
export const id="dl_82a58cd4d13d4e8198ae";
export const url=new URL("../icons/mouse-middle-click-fill.svg?v=61540f869330f304b2ed443e8ca6bcaa2d037deb78e1b8dac26b84becab3995a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
