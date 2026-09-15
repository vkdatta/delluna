export const name="call_missed-fill";
export const id="dl_62c10fad848e4b53908a";
export const url=new URL("../icons/C/call_missed-fill.svg?v=d0757b6f64d5c3ae5547552d9312a5279cc011332753bb0a8ec8410a19072733",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
