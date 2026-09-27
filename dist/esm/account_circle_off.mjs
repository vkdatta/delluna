export const name="account_circle_off";
export const id="dl_67b17969dd2f8f2c5e7c";
export const url=new URL("../icons/account_circle_off.svg?v=5359e3a4b8a03326fd37326a5d1d9355a1d57d14d6026c0a84c6affa4cc471fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
