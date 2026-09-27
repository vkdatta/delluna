export const name="sofa-fill";
export const id="dl_e3aa4221985b397b39c0";
export const url=new URL("../icons/sofa-fill.svg?v=05138360bfac9f0b6d3b6b6ef379f86d095075343467eb31e46566135f493582",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
