export const name="looks_4";
export const id="dl_68b1c73644c94859b16e";
export const url=new URL("../icons/looks_4.svg?v=8bf28fd8c3d1cd6a33e6df7c6e2da277539f2bd78c2e4dd102630760952f2b76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
