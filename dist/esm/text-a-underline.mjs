export const name="text-a-underline";
export const id="dl_5f2874ee8a69d913cb19";
export const url=new URL("../icons/text-a-underline.svg?v=616db7ac5964085df8c25eaafbcc5289c1ea105fa0dadf05c04badd8987b331d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
