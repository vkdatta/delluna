export const name="15mp";
export const id="dl_55d9136860c106bd3f20";
export const url=new URL("../icons/15mp.svg?v=a71c80f1a5a35128a0b7f73cd0d60bda59aa7619bda552e211bd04f1dd6883a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
