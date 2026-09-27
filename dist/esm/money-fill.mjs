export const name="money-fill";
export const id="dl_2ced6f0e293f462793a9";
export const url=new URL("../icons/money-fill.svg?v=c15cae688320208982d294b944130568c82ac2bcb5380e2f3e3e27ed961197aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
