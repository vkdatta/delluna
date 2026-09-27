export const name="fallout-shelter";
export const id="dl_b5d1f442f13f4a5197c6";
export const url=new URL("../icons/fallout-shelter.svg?v=122cb1fe56dcba497c2d4100aa3824dac1ed6c52afe7a10c4dbf411b074a57a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
