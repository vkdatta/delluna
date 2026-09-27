export const name="lucid_3-receipt-japanese-yen";
export const id="dl_c5caff52cd23455585fa";
export const url=new URL("../icons/lucid_3-receipt-japanese-yen.svg?v=9e73d77f14639018e98b05cc9198fd2501a421bdcf0ac78ccbad6564824f215c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
