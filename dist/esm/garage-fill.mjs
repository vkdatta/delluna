export const name="garage-fill";
export const id="dl_b8c7ddad282d419f9167";
export const url=new URL("../icons/garage-fill.svg?v=b1e58a96dff3a499aa652c2ab09f1a5ddfc2c4a7e9eecfec6972fdbf01722171",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
