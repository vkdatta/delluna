export const name="123";
export const id="dl_152fab49f1c14d339530";
export const url=new URL("../icons/1/123.svg?v=04610dd020203fdc1afc9c596a79d11065865d28ab5bec9446c726add61befcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
