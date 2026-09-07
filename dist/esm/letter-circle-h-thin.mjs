export const name="letter-circle-h-thin";
export const id="dl_ba572c7a76ef41a489de";
export const url=new URL("../icons/letter-circle-h-thin.svg?v=e48eff67b1d88dfc4d1cdd7c802350c7e610f2ede2964b3d3c7d04b50f34d0fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
