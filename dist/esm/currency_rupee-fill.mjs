export const name="currency_rupee-fill";
export const id="dl_589159a54f652a6d2019";
export const url=new URL("../icons/currency_rupee-fill.svg?v=2b22f105658a2126b081ed500dadb646ec8eb878f5413a0def4ab8f4d8d2b6f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
