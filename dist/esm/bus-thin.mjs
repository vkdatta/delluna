export const name="bus-thin";
export const id="dl_2558ac40921645a8bfc5";
export const url=new URL("../icons/bus-thin.svg?v=c18a86fe037a8e4e4ea5e91dee7ec8b44f2ed454c179d3fc90937607873e2502",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
