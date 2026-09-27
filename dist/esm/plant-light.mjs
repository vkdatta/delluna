export const name="plant-light";
export const id="dl_d3822927675e498d9176";
export const url=new URL("../icons/plant-light.svg?v=b60e3e033b5062d03dcd88958771fabaab1172f7bb4b72e352f3ac28b4507e65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
