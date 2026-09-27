export const name="format_paint-fill";
export const id="dl_3c826ebfb862062d7042";
export const url=new URL("../icons/format_paint-fill.svg?v=32d9d99bc9519c9bc145b89a87132b8ec1aa39cab456dc83428e073c9159c252",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
