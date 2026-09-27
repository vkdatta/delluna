export const name="presentation-chart-bold";
export const id="dl_7b64e663d2d9471cb0c0";
export const url=new URL("../icons/presentation-chart-bold.svg?v=cdaefabdd0b4827e6bdc31a68cfa6fc9a39e25fe399aa40595a8e6f76cb9c560",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
