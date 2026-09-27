export const name="arrows-down-up-duotone";
export const id="dl_e979a4e29c3c4ea5ba28";
export const url=new URL("../icons/arrows-down-up-duotone.svg?v=f7f1a0a690efecfa94ae348a01c50a4a8178bac5af67c71d1bff56d338df73e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
