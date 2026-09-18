export const name="account_circle-fill";
export const id="dl_29394adc97b24f2cb3ff";
export const url=new URL("../icons/account_circle-fill.svg?v=8cee289607bc38e51750a0563ae236375d3fba69ad00d3f38ce7c00f8454cbb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
