export const name="unpublished-fill";
export const id="dl_690ad60d0b2f3b8a067c";
export const url=new URL("../icons/unpublished-fill.svg?v=75da527d028e89f661ed9da6e95bf3c1035cc74ed3cf582263c65521ea4af9ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
