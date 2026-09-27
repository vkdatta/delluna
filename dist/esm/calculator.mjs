export const name="calculator";
export const id="dl_8af598981a01420ab06e";
export const url=new URL("../icons/calculator.svg?v=fbe5cdc5544a4629dd422a2b1af0d92bbc25d028d6c0ecc3a62b1210777e2dd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
