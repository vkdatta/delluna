export const name="sms-fill";
export const id="dl_1df30483c1e5b07f7af6";
export const url=new URL("../icons/sms-fill.svg?v=46e8703548293eeba52ef9ef09c070abf60784821804850ec0359b9bb825de92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
