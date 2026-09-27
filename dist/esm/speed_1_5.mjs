export const name="speed_1_5";
export const id="dl_e89d7dfbd2b0e0b7fe2e";
export const url=new URL("../icons/speed_1_5.svg?v=8e7a898d671ee0a57ed6462162bb7fe46e93197fcd0121123e6c696e9c5cc4ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
