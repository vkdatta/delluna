export const name="wall-fill";
export const id="dl_951a151dc92d262ad242";
export const url=new URL("../icons/wall-fill.svg?v=49ac7cb93349c415ec23133508afe4addfc2da6194abd3160e6a3f43a78789f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
