export const name="webhooks-logo-bold";
export const id="dl_c7b35cb685ef9f659462";
export const url=new URL("../icons/webhooks-logo-bold.svg?v=ed991179f765c46abf835538aa512b96d57846da902c0b2f0bd90e33b1388082",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
