export const name="rabbit-bold";
export const id="dl_afbd7c3ed6a24b47884e";
export const url=new URL("../icons/rabbit-bold.svg?v=f8fddfcf3cfd9e8089f4b10b0d19e15438df4bba48735f821631559ccbfead49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
