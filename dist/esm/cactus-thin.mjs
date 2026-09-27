export const name="cactus-thin";
export const id="dl_b641fb1f26994cdf9b38";
export const url=new URL("../icons/cactus-thin.svg?v=f62d1f9631c19cd83a38274a3ff66f079c9a3a33e69c6ad0fd0333718bd729e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
