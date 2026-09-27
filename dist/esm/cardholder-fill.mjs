export const name="cardholder-fill";
export const id="dl_67afd256be36462485aa";
export const url=new URL("../icons/cardholder-fill.svg?v=949b8e6e60f277661c7bbbcc3489d87db541cb9d56f02e3269f68dc6524571a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
