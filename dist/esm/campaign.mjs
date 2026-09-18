export const name="campaign";
export const id="dl_9133f961577740fba459";
export const url=new URL("../icons/campaign.svg?v=d94dc114d9aea1ef3198f9e6558390086e53cd8967f86fca9d8e3a53689ff2c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
