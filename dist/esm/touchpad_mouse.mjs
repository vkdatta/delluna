export const name="touchpad_mouse";
export const id="dl_9a3d257c59f6ecd01a31";
export const url=new URL("../icons/touchpad_mouse.svg?v=6a811e99c1b7434d940eaf2275724aec93b689a74390aa265824fb1f43c3c509",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
