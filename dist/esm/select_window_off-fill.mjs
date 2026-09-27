export const name="select_window_off-fill";
export const id="dl_fb4e2977fb03b368d5f9";
export const url=new URL("../icons/select_window_off-fill.svg?v=9edb34a004ecd118a725791e6421273b0ee7f60ca9f3059871806d7a803985e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
