export const name="workspace_premium";
export const id="dl_38123fe1dc7a4d98ab26";
export const url=new URL("../icons/W/workspace_premium.svg?v=0a6b4c832b67ae3fb25950cd3bcdf813e9e699ca3c350ef116d97107669e9d25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
