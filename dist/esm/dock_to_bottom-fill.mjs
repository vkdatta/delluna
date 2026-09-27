export const name="dock_to_bottom-fill";
export const id="dl_dde0bab52480f1894a37";
export const url=new URL("../icons/dock_to_bottom-fill.svg?v=e9c0c04a9c97182c0268dfb43b57c9639cdba8753f5db651222ea2cc689a8cd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
