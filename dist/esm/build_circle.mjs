export const name="build_circle";
export const id="dl_d3370dabf5f110c92767";
export const url=new URL("../icons/build_circle.svg?v=928fe23fb56222ba8c4d7b121ea601daebf0d52d67f0942a1528fc34bd8516dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
