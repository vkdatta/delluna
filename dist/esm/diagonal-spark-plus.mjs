export const name="diagonal-spark-plus";
export const id="dl_f46af290f5f040ce9a45";
export const url=new URL("../icons/add/diagonal-spark-plus.svg?v=d91994882a008c499d03d1adc154f321ff32195ac07835ad2c2cb0eab7406b33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
