export const name="low_priority-fill";
export const id="dl_0718c0756bde43e2a331";
export const url=new URL("../icons/L/low_priority-fill.svg?v=6b3a68ef913678b8db42b32d7f1220f1e9f13f632b74fbc920a7656a8efaf39e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
