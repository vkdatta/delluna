export const name="taxi-thin";
export const id="dl_aa9c87f50be415b158bb";
export const url=new URL("../icons/taxi-thin.svg?v=4438554c66d525e76696c2646f73528bc3ccb9a2cc2f40fd9ae8734288b670e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
