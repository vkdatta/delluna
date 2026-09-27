export const name="signal_cellular_alt_2_bar-fill";
export const id="dl_7cb4e4dfb0ed042a694d";
export const url=new URL("../icons/signal_cellular_alt_2_bar-fill.svg?v=7c922705b7bfabc357e4cb6cb537b8cb80e08f98f8e91bc8eade1a2d090bba37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
