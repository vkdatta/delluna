export const name="currency-jpy-thin";
export const id="dl_f5076995362d46269401";
export const url=new URL("../icons/currency-jpy-thin.svg?v=3018462191bef6f6b1331e8c049963c10301fd75b8e705f3854f2ff56735d141",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
