export const name="gif-fill";
export const id="dl_5272d5f761e849ec8bf0";
export const url=new URL("../icons/gif-fill.svg?v=5958872762918abe8accc3971f7cc026c96d5998b58cc50038395d39212bca8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
