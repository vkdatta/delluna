export const name="barricade-fill";
export const id="dl_890e4b39cac04864acc4";
export const url=new URL("../icons/barricade-fill.svg?v=7a1a910be8adf5d0ba172a254d25522e6ecf7d912596c4241cb5bdcad1872b22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
