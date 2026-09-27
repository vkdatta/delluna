export const name="heart_broken-fill";
export const id="dl_e2235e4ef9b10706473d";
export const url=new URL("../icons/heart_broken-fill.svg?v=3ec79483344efd8326c2d8e6c343dac8eb0a7551b3dce1a379c15c7742b0ef5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
