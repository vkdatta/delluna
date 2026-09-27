export const name="currency_yen";
export const id="dl_70da62ac34d042fa008e";
export const url=new URL("../icons/currency_yen.svg?v=a61f24886be09c78883d704e47d6ae8dd2b3312e94501a01e3e5bcf560e4640c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
