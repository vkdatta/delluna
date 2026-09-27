export const name="play-circle";
export const id="dl_016a689bfb634eb0b14e";
export const url=new URL("../icons/play-circle.svg?v=3e5b86488942fdbfd10647ac82bba4d3f148a9c0ea93619abfe65f215d5b2ed5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
