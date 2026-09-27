export const name="funnel-thin";
export const id="dl_75b9f6dc658f42d68dcd";
export const url=new URL("../icons/funnel-thin.svg?v=9b412e16e8cc677d3a7e6f12a84922fecfc0c575502810d3f3faeae3a37ab380",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
