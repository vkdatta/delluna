export const name="mouse-right-click";
export const id="dl_557fba0e024744a79df3";
export const url=new URL("../icons/mouse-right-click.svg?v=58de06fac33ff4637d2c8d67d6eeb56cb2f6a20e53db622cf1e84bc2f5c53a91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
