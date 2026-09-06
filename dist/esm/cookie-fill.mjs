export const name="cookie-fill";
export const id="dl_91114a26c3484fdf9383";
export const url=new URL("../icons/cookie-fill.svg?v=10e903ab29021a3d00a7012c1cab7aa412b44fe4b668f1fa5308b8c0d9345a92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
