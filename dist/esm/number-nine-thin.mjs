export const name="number-nine-thin";
export const id="dl_33fd5542c0104dd492d2";
export const url=new URL("../icons/number-nine-thin.svg?v=8222f9cc7b7885c3ebda5cf96246b6f5eaaff7f012a33f94972fe157f4bb7b5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
