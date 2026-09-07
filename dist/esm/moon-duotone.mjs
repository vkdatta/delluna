export const name="moon-duotone";
export const id="dl_30a669b750174436b2ee";
export const url=new URL("../icons/moon-duotone.svg?v=64c8f8b7ba1ad4ae1e892a34ba895744747d9bcd8daaf1d924051c69c4c64650",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
