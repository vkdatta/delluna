export const name="flash_off-fill";
export const id="dl_86871d600ebdb2af5c31";
export const url=new URL("../icons/flash_off-fill.svg?v=595515ad0083beb3d979f00a05a57e1468e4352439397a400f05324dce8aae7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
