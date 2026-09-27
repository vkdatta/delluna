export const name="touchpad_mouse";
export const id="dl_fef19934374a7879c391";
export const url=new URL("../icons/touchpad_mouse.svg?v=8af457703a7cc23ac8046733e4225f26146aae6b2545818e36884ad1b9481124",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
