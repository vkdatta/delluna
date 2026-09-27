export const name="password-bold";
export const id="dl_5b5053e097914cb4bf91";
export const url=new URL("../icons/password-bold.svg?v=9a9e947c0d6253a57c72234c5f4f033d030e33e93c6e8b42fe061924a278764d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
