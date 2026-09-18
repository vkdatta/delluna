export const name="traffic";
export const id="dl_4597f1014c4144fe9f8a";
export const url=new URL("../icons/T/traffic.svg?v=cf1a709c6f0de040fe514c041d1a8a9b335ca376ec800cef22a8b072a25f8040",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
