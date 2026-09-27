export const name="currency_rupee_circle-fill";
export const id="dl_fe524ab9912fa1d61af5";
export const url=new URL("../icons/currency_rupee_circle-fill.svg?v=c7b1216fb2e4d0fcf3e3375dbdd35a671ba0f9a23c3c80d1aae81c578c6b9666",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
