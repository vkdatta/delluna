export const name="clock-clockwise-duotone";
export const id="dl_abd12597e99d419d8369";
export const url=new URL("../icons/clock-clockwise-duotone.svg?v=1af8a8e6250f2c3d950205f25b8749d7991bc13f521dc9536d0a193eb03721db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
