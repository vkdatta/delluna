export const name="cash-register-thin";
export const id="dl_b9a18f43dd3a45558ced";
export const url=new URL("../icons/cash-register-thin.svg?v=41987b4ca81c6fc3326774e4bb5be5220d8e2f241cf45f15cc3bef9d40b94349",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
