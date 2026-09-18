export const name="left_panel_close-fill";
export const id="dl_c284584cdef04db8bb3a";
export const url=new URL("../icons/left_panel_close-fill.svg?v=7e37a7d66791b75f314e92c77aff9df710a0c219d825fd895b6847bf39346ff9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
