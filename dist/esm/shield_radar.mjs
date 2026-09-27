export const name="shield_radar";
export const id="dl_6db470e4e138ee681e33";
export const url=new URL("../icons/shield_radar.svg?v=9fd4de395e3bda263b5cb955938f951b6234148e69990800015434102a461803",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
