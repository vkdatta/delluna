export const name="cash-register-light";
export const id="dl_308730f3b9314c7e8dfa";
export const url=new URL("../icons/cash-register-light.svg?v=9c733e36ad3c6bfd8b730a5d579caa36bc1092c179f203e37e6ad5f2221283c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
