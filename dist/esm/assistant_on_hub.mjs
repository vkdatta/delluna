export const name="assistant_on_hub";
export const id="dl_c3df9cf24edaa3237eec";
export const url=new URL("../icons/assistant_on_hub.svg?v=7865549d12eb4b755c43a510da8cfc283c49fc140902b78115f971970fd52515",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
