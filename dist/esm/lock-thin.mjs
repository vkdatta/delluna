export const name="lock-thin";
export const id="dl_d2953198cff44555ac7c";
export const url=new URL("../icons/lock-thin.svg?v=aced25c4dcbc2b28551be7988af26909d686647db3ccac48e6cdf804b0b21732",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
