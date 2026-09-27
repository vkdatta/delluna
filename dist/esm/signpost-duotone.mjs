export const name="signpost-duotone";
export const id="dl_de73baa82d207b20fbdc";
export const url=new URL("../icons/signpost-duotone.svg?v=01597f65254035bd7431e35ee67b891b2e4d0c68905f31190ba58ee21f8505da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
