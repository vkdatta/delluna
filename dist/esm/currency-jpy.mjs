export const name="currency-jpy";
export const id="dl_465930ca2660477d87cc";
export const url=new URL("../icons/currency-jpy.svg?v=30ffa86da8af81cb69a730e8021f5bc150ae1c90e4c90e1dea571cbd0e3362f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
