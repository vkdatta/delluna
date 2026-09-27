export const name="path-light";
export const id="dl_79730ca9df234178b887";
export const url=new URL("../icons/path-light.svg?v=adc8de21859988881a6d0144551ebb6d0f1828d258478a2fcebd634322081b54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
