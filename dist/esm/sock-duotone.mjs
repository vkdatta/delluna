export const name="sock-duotone";
export const id="dl_becf7fc077094b418404";
export const url=new URL("../icons/S/sock-duotone.svg?v=0894c0382d983320358752aee869aed87dee9b2a3f5bb07e6b48af6f7e483d84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
