export const name="co2";
export const id="dl_e93ced2e2d7b4493bdf9";
export const url=new URL("../icons/C/co2.svg?v=bd4bdf9b10f645852a688d2cf803dfce23ebc086afaf331383481f4294d56b79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
