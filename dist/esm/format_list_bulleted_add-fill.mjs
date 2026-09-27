export const name="format_list_bulleted_add-fill";
export const id="dl_b1bf779c5c8ad9717950";
export const url=new URL("../icons/format_list_bulleted_add-fill.svg?v=3d48b27441cbaf42621b53f93d0aaffaaf710883da78e1ff0525ced97cbea2cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
