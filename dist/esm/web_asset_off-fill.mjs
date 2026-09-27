export const name="web_asset_off-fill";
export const id="dl_3b17fadd469bb5aab35f";
export const url=new URL("../icons/web_asset_off-fill.svg?v=033808920a5755b41ff2786a8535fc1f150649de86c07ddb3c7832f22ad846fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
