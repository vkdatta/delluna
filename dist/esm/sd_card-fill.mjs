export const name="sd_card-fill";
export const id="dl_fddf583d40d75516dc5c";
export const url=new URL("../icons/sd_card-fill.svg?v=93201dd2c8e86bc87c59bb51b685a0d08d78ed9b5793379ef35abe40184a3c3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
