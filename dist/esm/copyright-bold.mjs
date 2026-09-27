export const name="copyright-bold";
export const id="dl_67155335205d4958bbd2";
export const url=new URL("../icons/copyright-bold.svg?v=bc9cd85aae58f7f02cd0b15b66a8a4fa4da203d8572c1af0f02996fa407a36a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
