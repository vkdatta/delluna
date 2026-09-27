export const name="arrow-up-left-thin";
export const id="dl_d28003c625e0473b82f0";
export const url=new URL("../icons/arrow-up-left-thin.svg?v=c86d176916edbcd25192bd3bbf37d33f81ab87ba37200e22b48661a31a23dde4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
