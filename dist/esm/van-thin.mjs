export const name="van-thin";
export const id="dl_cf9827f727784feea003";
export const url=new URL("../icons/V/van-thin.svg?v=30c42a1e59af19bb0331c85ab8964ea7f7be7ec0d1e58556d5e848b793871973",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
