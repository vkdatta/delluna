export const name="minus-square-fill";
export const id="dl_f739a3bcaa8c4d768530";
export const url=new URL("../icons/minus-square-fill.svg?v=5dc8573aaf0e0ed90128f3f44847d59479049940df04325f508bc645450ea2a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
