export const name="ar_on_you";
export const id="dl_23ff9b2a7e4d4c038d27";
export const url=new URL("../icons/A/ar_on_you.svg?v=51d488bf210c5f6a3a3b9222590002bc522c3f8a3ad1b7cbc571f53d23ff18f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
