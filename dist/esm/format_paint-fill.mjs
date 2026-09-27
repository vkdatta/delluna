export const name="format_paint-fill";
export const id="dl_5ffd97c6e67f3a298ae3";
export const url=new URL("../icons/format_paint-fill.svg?v=babf583380b9b5abea3f4506bce01fa9d3feb4224e2363b68640bfdeb1cf2de2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
