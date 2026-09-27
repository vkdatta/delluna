export const name="currency_yen";
export const id="dl_81c625488f06fde4f115";
export const url=new URL("../icons/currency_yen.svg?v=9ae413c6c5af1b95dda880ea849cbb794c47550cbeffb5cf530040c5a9ed2570",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
