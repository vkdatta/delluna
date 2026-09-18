export const name="mobile_screensaver-fill";
export const id="dl_cab697386ce14995b199";
export const url=new URL("../icons/mobile_screensaver-fill.svg?v=0c332ef341facf71a1c5ec3bc20f5babaf1c397362af0df52bc9947201ad9d46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
