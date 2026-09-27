export const name="lego-light";
export const id="dl_437626a50e6b4d9db2d7";
export const url=new URL("../icons/lego-light.svg?v=5e3907e5a1d723394091e5812275b1a7cbe47198fa2e29d2127cb507e2e3031a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
