export const name="lucid_1-battery-warning";
export const id="dl_d015667e51d74fe5ad98";
export const url=new URL("../icons/lucid_1-battery-warning.svg?v=e491e50adbe3ccf9cd32ed01e5a380c62d4be77af34a7d654fff8303d67b2d35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
