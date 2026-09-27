export const name="single_bed";
export const id="dl_a5a6250f0d9e0a0c216e";
export const url=new URL("../icons/single_bed.svg?v=152307df6f28e7708b726354556a89c8430213f118679551eef24ccbef75390e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
