export const name="circles-three";
export const id="dl_91379157fa7945879212";
export const url=new URL("../icons/circles-three.svg?v=9015268466d74b4c36a9877c271593f067f416afd252e0c1f7ab09edf190c594",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
