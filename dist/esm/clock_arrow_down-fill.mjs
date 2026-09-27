export const name="clock_arrow_down-fill";
export const id="dl_a2a643e9a8b0ef7d86d4";
export const url=new URL("../icons/clock_arrow_down-fill.svg?v=91cdc1c8aea382832a4f4f2dc6a54594d1c305157fa80b707767732b23710f8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
