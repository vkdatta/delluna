export const name="cactus-thin";
export const id="dl_b641fb1f26994cdf9b38";
export const url=new URL("../icons/cactus-thin.svg?v=e1e54c190eedf147b46a826f7706cfea186194ea4d52f5cd319c37b430c15da3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
