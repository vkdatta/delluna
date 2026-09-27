export const name="campaign";
export const id="dl_304fd549dec618076351";
export const url=new URL("../icons/campaign.svg?v=b73a8c371378966147266eceb55d4cc4a4901a4c77cef3e1f041baf396f14cd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
