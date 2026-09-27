export const name="mode_fan_off-fill";
export const id="dl_d4c6cb841072d60164cc";
export const url=new URL("../icons/mode_fan_off-fill.svg?v=a839aa982189b8644824d8113686e5a419bb8efdf840db8be8b7c9c88044decd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
