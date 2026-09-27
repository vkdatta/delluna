export const name="chalet";
export const id="dl_e3ff08aa63e5d2567332";
export const url=new URL("../icons/chalet.svg?v=b35a478b724ea9b131b036e122faad791a1b95501b21b4283548d22cb2071742",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
