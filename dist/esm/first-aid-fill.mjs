export const name="first-aid-fill";
export const id="dl_079361ad91254541a48a";
export const url=new URL("../icons/first-aid-fill.svg?v=f2d994187c7c6d41e2253a568b04a570c277481259a4bb633042642fec5710c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
