export const name="shield-slash-fill";
export const id="dl_28f2175740d53bb4edf3";
export const url=new URL("../icons/shield-slash-fill.svg?v=b7f780eb3eb038e805d52d37f9d0adc24b59d1710afa272c00a4a3c76d34efed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
