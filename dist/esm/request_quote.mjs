export const name="request_quote";
export const id="dl_d3d41836f8004007845a";
export const url=new URL("../icons/R/request_quote.svg?v=9988bb5fe9c2d17fe1d3c6bfea36fe5001f1b1cd841069e19307ae692c57bd50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
