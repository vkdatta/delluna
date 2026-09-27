export const name="model_training-fill";
export const id="dl_fe95ca416c0307a26b71";
export const url=new URL("../icons/model_training-fill.svg?v=f9377ef6b3387a200b13a7a81f9a6dc6b23e6ece91c6b6aab59a78998636812e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
