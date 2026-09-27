export const name="android-fill";
export const id="dl_99ebe4a1b53a10225101";
export const url=new URL("../icons/android-fill.svg?v=fee0638c2973a18aea97cd78dc06ce52fac8583b627956b0a4ce04d6b79bcc0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
