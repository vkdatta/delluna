export const name="cherries-fill";
export const id="dl_48d6d8c278f64ecc8e32";
export const url=new URL("../icons/cherries-fill.svg?v=ff97c8a3524fa4d3b197f1f00fc284c4e697f735e94df90d2dad200b1ba660d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
