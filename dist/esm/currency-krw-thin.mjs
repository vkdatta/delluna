export const name="currency-krw-thin";
export const id="dl_de1fe99952d5404dad6d";
export const url=new URL("../icons/currency-krw-thin.svg?v=bc79ad0c6a6f697175864ed666ed761d1f9cb7d250b87b6fb1cdf63b4350ebf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
