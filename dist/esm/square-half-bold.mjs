export const name="square-half-bold";
export const id="dl_8294bdf6f77aa2b1c9fa";
export const url=new URL("../icons/square-half-bold.svg?v=5cac2bc13d9fea6d3e9e37885d7b9992b397902f20a0e22169f8c85ad0948eff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
