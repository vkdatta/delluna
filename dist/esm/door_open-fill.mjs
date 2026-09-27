export const name="door_open-fill";
export const id="dl_60722631daa33c8de7ec";
export const url=new URL("../icons/door_open-fill.svg?v=6eff6a252af22d0f214d4f5842ab17356020ab150c69b13e2b89c25f8822ad0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
