export const name="percent-bold";
export const id="dl_b887029f1b0c404f8884";
export const url=new URL("../icons/percent-bold.svg?v=5018c6d26092d432d5d738e6f435083ae63133f085395d49020509888d6e90b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
