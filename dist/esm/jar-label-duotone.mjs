export const name="jar-label-duotone";
export const id="dl_39f46284ced64416badb";
export const url=new URL("../icons/jar-label-duotone.svg?v=af61171d76f988ab69768a4a081a96be59db48a8c362e622b2746955e222ca5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
