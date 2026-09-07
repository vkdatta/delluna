export const name="shield-star-duotone";
export const id="dl_ccec2d75f44149238ff0";
export const url=new URL("../icons/S/shield-star-duotone.svg?v=a91ab9a92e57c230a991b4687a607f04fb44327f8541cd8e2e32706ed7ce393e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
