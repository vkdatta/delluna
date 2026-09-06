export const name="lucid_3-monitor";
export const id="dl_48a6215e92344d998e13";
export const url=new URL("../icons/lucid_3-monitor.svg?v=8cb0f169f84fff4804264dc0e798f1d909e447a591726da20baee4006a595f51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
