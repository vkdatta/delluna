export const name="view_compact";
export const id="dl_06e3ce6be31bcef0ffab";
export const url=new URL("../icons/view_compact.svg?v=6e47288ca5ca1d17d0e954bbbd5e496a0870bea57510517d5e2570804a53d0e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
