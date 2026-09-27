export const name="currency-jpy-bold";
export const id="dl_ab2777dd1ed54e08aa89";
export const url=new URL("../icons/currency-jpy-bold.svg?v=7e66d5718764fb15f81ec8413ea3149c0ec99797ef09bbdc454c0e82c55dec7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
