export const name="funnel-simple-x-thin";
export const id="dl_d0122efae63f49eb9c63";
export const url=new URL("../icons/funnel-simple-x-thin.svg?v=63d105393feb570ae892b6ffce52e9ef8ba65228548e34a133a75471cf55dcf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
