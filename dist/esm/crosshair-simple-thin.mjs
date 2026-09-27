export const name="crosshair-simple-thin";
export const id="dl_1c300da458134976a669";
export const url=new URL("../icons/crosshair-simple-thin.svg?v=ff9935130201c349c02ea3102f7df99995dcddda19855ffe06633a485d762c72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
