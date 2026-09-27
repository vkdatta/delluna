export const name="text_rotation_down-fill";
export const id="dl_cb4b50a22407f1a9453d";
export const url=new URL("../icons/text_rotation_down-fill.svg?v=2630249c8661fb1be70d97431a469dd6d73b09f34ff002085d7879246fc7758b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
