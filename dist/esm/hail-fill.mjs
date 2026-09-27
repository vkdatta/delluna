export const name="hail-fill";
export const id="dl_4c92eb146bff046632e2";
export const url=new URL("../icons/hail-fill.svg?v=5e6a6f6c580b94945e7fbc761e11832675706850a67668755b08c52cde7c5bdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
