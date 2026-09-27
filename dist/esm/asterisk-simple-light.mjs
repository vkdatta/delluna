export const name="asterisk-simple-light";
export const id="dl_8e3f9e1d04724a18a24f";
export const url=new URL("../icons/asterisk-simple-light.svg?v=500710b661baf8823e7cd9f66e831f11d382a9b682418e29a4bf9b7a89bef92e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
