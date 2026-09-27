export const name="pie_chart-fill";
export const id="dl_18654d5060957892a4af";
export const url=new URL("../icons/pie_chart-fill.svg?v=5a1fae7d40c450cf9a927bd50dc3d695236a5bc975a434129fffb882e295258d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
