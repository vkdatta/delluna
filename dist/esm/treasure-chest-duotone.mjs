export const name="treasure-chest-duotone";
export const id="dl_91c90e68fd91d2025a9c";
export const url=new URL("../icons/treasure-chest-duotone.svg?v=72fa9d7aae7b9f7f4a6bd50e177bc40e0a119c6f037923404b70e9808ae0332d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
