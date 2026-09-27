export const name="swap_calls";
export const id="dl_aa7dba758570650e6157";
export const url=new URL("../icons/swap_calls.svg?v=f8b85d63b1211bce3a04c31c914be8998b7babb30708ce6bf6b41cd017bcd012",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
