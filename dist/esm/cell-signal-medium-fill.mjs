export const name="cell-signal-medium-fill";
export const id="dl_86938aed5842463eb843";
export const url=new URL("../icons/cell-signal-medium-fill.svg?v=094299cc3d62c126afd50cc172a17390057c43d86bd183e187cd2d99a4e6dab3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
