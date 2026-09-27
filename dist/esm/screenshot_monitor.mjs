export const name="screenshot_monitor";
export const id="dl_f110e0396616dd46cfad";
export const url=new URL("../icons/screenshot_monitor.svg?v=0ae7e81cccf8d15d0992ace848ce154491cff049a5624d8839c15aab4005e27c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
