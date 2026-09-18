export const name="wrong_location";
export const id="dl_2b53413844b0404599b3";
export const url=new URL("../icons/wrong_location.svg?v=03cad4e6b825713c08cf1a6ef089edc8bf54a85cf30ab2536482c3154d331579",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
