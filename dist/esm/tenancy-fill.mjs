export const name="tenancy-fill";
export const id="dl_f305e94f0a1d04a7152f";
export const url=new URL("../icons/tenancy-fill.svg?v=76b23982035c2fed761de62dc6bad70b4d77ad287ba98422678f99b7965d988f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
