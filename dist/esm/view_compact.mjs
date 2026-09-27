export const name="view_compact";
export const id="dl_97d49aa8e2ffbf4cbac9";
export const url=new URL("../icons/view_compact.svg?v=1438b570e18978fbe0dc15605b45d0f515a46da14e6209cee24797b1f3307739",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
