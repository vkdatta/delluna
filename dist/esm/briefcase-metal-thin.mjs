export const name="briefcase-metal-thin";
export const id="dl_e5f25e3258da437da031";
export const url=new URL("../icons/briefcase-metal-thin.svg?v=5761c058552c2ee9e56de893fababb28b44b9f92b68364784778ae296ff9013b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
