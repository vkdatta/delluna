export const name="landscape_2";
export const id="dl_a0e8464d2f4b4d8abfca";
export const url=new URL("../icons/landscape_2.svg?v=4b7d7c1070a71daad748691bef014c54c3de36797ba3f22461ad7d35b3188c7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
