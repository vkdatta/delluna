export const name="battery-full-duotone";
export const id="dl_4a38976f34d24dd7866c";
export const url=new URL("../icons/battery-full-duotone.svg?v=f1b434a832cec628ea609dfad1b1be34cf0c2b74b0cf16b821f1a1ef256f09d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
