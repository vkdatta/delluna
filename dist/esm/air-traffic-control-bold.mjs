export const name="air-traffic-control-bold";
export const id="dl_1fa8cb41aa8c43b5bc80";
export const url=new URL("../icons/air-traffic-control-bold.svg?v=84563f9feb4b4a4ac8f02ba969af6815ad64b44cae4c3f9ec3708a22ff53dfae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
