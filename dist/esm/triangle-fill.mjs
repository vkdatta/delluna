export const name="triangle-fill";
export const id="dl_e1cd549a2e7a93a9d5d5";
export const url=new URL("../icons/triangle-fill.svg?v=110f81780988098d091503f86634f83a5fce96c43849557fb5c1cfb49018700d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
