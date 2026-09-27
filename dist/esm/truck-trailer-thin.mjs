export const name="truck-trailer-thin";
export const id="dl_a9e1df263bfaa3e26c3d";
export const url=new URL("../icons/truck-trailer-thin.svg?v=c3b7504a0c0e0d7216f841cdece316aa28f124dfd54a3f290d2262d896135a1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
