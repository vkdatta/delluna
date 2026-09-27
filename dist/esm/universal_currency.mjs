export const name="universal_currency";
export const id="dl_ba4c42b27cb4d596dff6";
export const url=new URL("../icons/universal_currency.svg?v=8837144bb9aeddbd8c034bcbe3942fbc922a6075e6956fa38d35897e3d9fb759",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
