export const name="action_key-fill";
export const id="dl_d98dfa9dd854d3e5de95";
export const url=new URL("../icons/action_key-fill.svg?v=0f59bd7f4b32eefebdfe60655df872f2393062b2a15daacc70f75913fe863cfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
