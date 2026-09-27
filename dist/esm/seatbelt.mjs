export const name="seatbelt";
export const id="dl_8214f4fd3e2e27bc0b3f";
export const url=new URL("../icons/seatbelt.svg?v=6b12ec40b2de61e7570f2ceb1b0bc0f8e13d64957c0330b68f5cf0d150ddd50d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
