export const name="gpp_bad";
export const id="dl_62bd648e50211c2aaed2";
export const url=new URL("../icons/gpp_bad.svg?v=87bb98fa7b45dead16421637da4a3e7ba9ddf93e86743ea976e8f64b1078319e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
