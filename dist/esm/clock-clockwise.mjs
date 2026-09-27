export const name="clock-clockwise";
export const id="dl_24f54bb7a2854dbfa5ac";
export const url=new URL("../icons/clock-clockwise.svg?v=29bc26ea66a18f95c034d509aa2d33d3457f6030fbe5ea6e4f6be42e272d5224",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
