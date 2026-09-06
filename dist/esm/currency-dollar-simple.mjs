export const name="currency-dollar-simple";
export const id="dl_051c676ca67343f99f4f";
export const url=new URL("../icons/currency-dollar-simple.svg?v=7aa694293f84bc178d45a694ba7fb6f521c64cb2ab449d2c1f55600d8806e050",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
