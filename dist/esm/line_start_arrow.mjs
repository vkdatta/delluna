export const name="line_start_arrow";
export const id="dl_ca7cddcf70ed4fa4b1e2";
export const url=new URL("../icons/L/line_start_arrow.svg?v=e90a93eeccf5ebf858a3b0cc27b9a1d41f9ffa6ed452ee8ffc147cdf277cabd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
