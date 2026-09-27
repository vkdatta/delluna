export const name="shoppingmode-fill";
export const id="dl_ee4dbde06656b5b79328";
export const url=new URL("../icons/shoppingmode-fill.svg?v=2472bcc5388447c189e239346706afe1e107e2c2293a96434b190aa176fe375d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
