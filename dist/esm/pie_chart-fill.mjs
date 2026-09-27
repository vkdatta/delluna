export const name="pie_chart-fill";
export const id="dl_f39a99a1d6e0b900511c";
export const url=new URL("../icons/pie_chart-fill.svg?v=1e56b496e1695dbed75404968e4e35010cf4bc28db4ccdb8ad6cc72186e5b430",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
