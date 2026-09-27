export const name="brightness_4";
export const id="dl_e575bdb0fd30f742ffa1";
export const url=new URL("../icons/brightness_4.svg?v=2ee0a07aca6946d45dc542c4fd9233197ecf255eff3f18b89ed84885ee2aaaa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
