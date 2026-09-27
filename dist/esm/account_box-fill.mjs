export const name="account_box-fill";
export const id="dl_12b31fb6680ea8538057";
export const url=new URL("../icons/account_box-fill.svg?v=2c5a3b4c1a0d9d13a82b0f06b9a17bf6dedfe458e460ca333e2a4447c4b96ab2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
