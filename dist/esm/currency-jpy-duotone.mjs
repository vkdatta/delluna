export const name="currency-jpy-duotone";
export const id="dl_d24ea3abeebc464286f0";
export const url=new URL("../icons/currency-jpy-duotone.svg?v=e7eaecb459ced73a11b6ccba63f85e7c6aea3b45477a6afb8350de84a31196a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
