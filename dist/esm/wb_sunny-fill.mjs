export const name="wb_sunny-fill";
export const id="dl_3fb6b316cf81f86ef4d6";
export const url=new URL("../icons/wb_sunny-fill.svg?v=38644f6077c0e2f32d959827c48abee60e9ea8c7941448cf7ea86f7506af4888",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
