export const name="tab_duplicate-fill";
export const id="dl_290cfba84b56db473510";
export const url=new URL("../icons/tab_duplicate-fill.svg?v=869a5d663b3c697b2dd13f383859a791d152694f227ab38d0ea575457c7e301c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
