export const name="alarm_off-fill";
export const id="dl_4f23e03c2c5e5e70b693";
export const url=new URL("../icons/alarm_off-fill.svg?v=da6ce8cd7e76a5f0b93fb15dac86f3571d44bd4a9e26ef9d7bfd82cc82016e01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
