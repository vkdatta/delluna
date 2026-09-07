export const name="chart-polar-light";
export const id="dl_af661b5becf74245a6c0";
export const url=new URL("../icons/chart-polar-light.svg?v=2a3c207c0b185337f02fb7d63dc952ce2101d5e81c1c18943030e2d4516790a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
