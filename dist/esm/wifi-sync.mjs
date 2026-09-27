export const name="wifi-sync";
export const id="dl_09270cc7e55a47658a45";
export const url=new URL("../icons/wifi-sync.svg?v=44f07b35cc77b15ad7db819da677c50a96e591267cfe31f6648666d8dec176e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
