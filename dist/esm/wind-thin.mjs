export const name="wind-thin";
export const id="dl_d103f64ee69b9896b82d";
export const url=new URL("../icons/wind-thin.svg?v=d0e8423ece9cf81719e6192165dc027d9cdc56a2754b5e8b89f4e9b24b25f3a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
