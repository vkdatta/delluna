export const name="laptop-bold";
export const id="dl_a06b8cd90c7a4a8f838f";
export const url=new URL("../icons/laptop-bold.svg?v=256033d605c5bc4a1673e2bce7b793c98fb0b16fae93f64ecf5efefee677aa48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
