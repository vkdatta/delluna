export const name="car-simple-duotone";
export const id="dl_7cdf00e4c13340809a18";
export const url=new URL("../icons/car-simple-duotone.svg?v=40214f542b12745b75855ab575357ea2c4db255acfeff8a1bf8867f7e4951376",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
