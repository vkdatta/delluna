export const name="tram-light";
export const id="dl_ab843730a34a45469305";
export const url=new URL("../icons/T/tram-light.svg?v=f6f0bf7cb89bc248181e92208106001c1e38723452799ee25f771fe032a9e544",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
