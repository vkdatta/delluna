export const name="hand-heart-thin";
export const id="dl_f337eb0b936140edace5";
export const url=new URL("../icons/hand-heart-thin.svg?v=c196de3c5892d9ca58ad58556f217c18f5fe02685f488fd9635887e4eb5ec1d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
