export const name="number-square-eight";
export const id="dl_429ba5372102433199c1";
export const url=new URL("../icons/number-square-eight.svg?v=102320ee526ea8e80682cc894f479ab2166367e1ecac26937a01ef2d1f362345",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
