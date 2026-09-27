export const name="web_asset_off-fill";
export const id="dl_43d301a39dbd88aafdb2";
export const url=new URL("../icons/web_asset_off-fill.svg?v=825a3d05de7996e5afdd8b3153fa381ed5a3927a4a8e40c73d90cbe8a88da4fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
