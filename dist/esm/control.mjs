export const name="control";
export const id="dl_c78fcf0510fa46d4a380";
export const url=new URL("../icons/control.svg?v=c437abaa47765cf51fa15dc459a06b49b44e042a073da6de995dfd0082848ce4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
