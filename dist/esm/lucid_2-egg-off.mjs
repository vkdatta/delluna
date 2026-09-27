export const name="lucid_2-egg-off";
export const id="dl_44423ba8db1e44c388ba";
export const url=new URL("../icons/lucid_2-egg-off.svg?v=1ba7b777c2e3960e7e3beb4b27360f9848d4f90b8bfbfb0ddb4477f03a57d7d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
