export const name="okonomiyaki-fill";
export const id="dl_d48a31d5136340e9a89b";
export const url=new URL("../icons/O/okonomiyaki-fill.svg?v=b591d4ad4aea875a91b9839af4e279378aefa226a8eae1bd2bcf554d302e8596",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
