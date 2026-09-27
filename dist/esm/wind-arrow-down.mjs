export const name="wind-arrow-down";
export const id="dl_34144465a79d434c8a2b";
export const url=new URL("../icons/wind-arrow-down.svg?v=cff6d111e17655f9e61100e9fd117576fc62dd8de1adce2603010e809f893cda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
