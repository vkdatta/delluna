export const name="foggy";
export const id="dl_af433dd72cd36445320b";
export const url=new URL("../icons/foggy.svg?v=20d9022948c6ac775bb2659ef7f23a244f47733217d4be3b988461529a0694fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
