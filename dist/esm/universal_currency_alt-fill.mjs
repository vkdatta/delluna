export const name="universal_currency_alt-fill";
export const id="dl_f12c760889e841ff8ae9";
export const url=new URL("../icons/universal_currency_alt-fill.svg?v=93f3d8a67b94ae8f4cbdada75569f4e5eca0a76ee019d106a16aa8a6759ef092",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
