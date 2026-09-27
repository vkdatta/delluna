export const name="play_disabled-fill";
export const id="dl_2733fd998488d3bd8761";
export const url=new URL("../icons/play_disabled-fill.svg?v=e7c876aea845cdeef48cebebcdbc01a525408dcb0a927fcbc18d18ae96b86cd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
