export const name="equals-bold";
export const id="dl_12d601e0726c44728950";
export const url=new URL("../icons/equals-bold.svg?v=9dba57b9f5fc7c689eac67e410641bd0948baae24aa5e11777e2d96c10ac89ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
