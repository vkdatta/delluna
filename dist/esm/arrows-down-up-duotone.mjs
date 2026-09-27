export const name="arrows-down-up-duotone";
export const id="dl_e979a4e29c3c4ea5ba28";
export const url=new URL("../icons/arrows-down-up-duotone.svg?v=f6ebce4cf84bb08720b71a41e3cee228b9269364599df8ec318a1a0241f68f5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
