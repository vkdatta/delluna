export const name="footprints-thin";
export const id="dl_9726602df91c403596df";
export const url=new URL("../icons/footprints-thin.svg?v=b1f75b57b6ece775649c2a4b5fa074e43400388f8b7ef87b8974bc70fd02420b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
