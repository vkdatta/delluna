export const name="cloud-rain-bold";
export const id="dl_642f46b2e531464496fb";
export const url=new URL("../icons/cloud-rain-bold.svg?v=b94c32862490f8a1c7da7c74d614984e36c10dec68c66382b8d159c9d8498fc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
