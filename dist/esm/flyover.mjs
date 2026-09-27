export const name="flyover";
export const id="dl_2820b140309483cbd773";
export const url=new URL("../icons/flyover.svg?v=c89ae6c80f95a3f36e14cd709546ba9d9ac66954aac5d52fa545ef58efd949c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
