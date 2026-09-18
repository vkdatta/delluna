export const name="send_time_extension";
export const id="dl_ff7b3aab33e84e0abf1c";
export const url=new URL("../icons/send_time_extension.svg?v=4e04bdfe025c35d414f2c9a383b6db6189d8e407c3e5070f5003aa410062df22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
