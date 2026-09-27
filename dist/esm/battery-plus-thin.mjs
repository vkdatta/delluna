export const name="battery-plus-thin";
export const id="dl_9223cd2566bb49a49433";
export const url=new URL("../icons/battery-plus-thin.svg?v=36c27e48d57b6ab672df5bd682de8f021018f677ebb6b1106967ed1a8997ee34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
