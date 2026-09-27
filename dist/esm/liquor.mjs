export const name="liquor";
export const id="dl_b9db4fa35d31d28b14cd";
export const url=new URL("../icons/liquor.svg?v=f42eb69c0f6f4744e38b3bf994fddec716e1a4912096b4081f55082daac779c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
