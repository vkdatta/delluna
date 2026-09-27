export const name="golf-duotone";
export const id="dl_d1c0a8daa7bd480cafad";
export const url=new URL("../icons/golf-duotone.svg?v=041bc64daccb19a4fe77ecf2e54413ab80778a10341f1c4e8b53e6f311ffc3ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
