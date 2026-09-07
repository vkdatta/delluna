export const name="ladder-duotone";
export const id="dl_5ed6d3b55ec947219f2f";
export const url=new URL("../icons/ladder-duotone.svg?v=5e6986508dfe025ca5d2aed45f91965546af1bec52cc07cc0935c75905b6cabf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
