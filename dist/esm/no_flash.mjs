export const name="no_flash";
export const id="dl_c2cad2e095b5f27c8b90";
export const url=new URL("../icons/no_flash.svg?v=784b6f0e61b0c152ea75ca5c89fee6ea753e6f86d91874ea308249d8c280e032",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
