export const name="line-segment-duotone";
export const id="dl_4b4adf30f6ff48d1b8f0";
export const url=new URL("../icons/line-segment-duotone.svg?v=113e6b92001942836c179c636e84866c1ef276d90e81eabdad3df11b9959862c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
