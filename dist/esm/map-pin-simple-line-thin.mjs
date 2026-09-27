export const name="map-pin-simple-line-thin";
export const id="dl_57f88d33f1384eaea671";
export const url=new URL("../icons/map-pin-simple-line-thin.svg?v=b6a33e4dc99ab91fcda9d9f8e412274985a38fc8265113230923114031f1996c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
