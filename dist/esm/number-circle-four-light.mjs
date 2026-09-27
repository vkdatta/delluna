export const name="number-circle-four-light";
export const id="dl_d80d9274389f410daa6b";
export const url=new URL("../icons/number-circle-four-light.svg?v=0a1d9f136b1ee94e03e07969f4d1d9487ef5951a01abe4669de5ad94492ea41a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
