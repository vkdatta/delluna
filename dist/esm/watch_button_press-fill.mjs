export const name="watch_button_press-fill";
export const id="dl_227f21f2e44591dff7ea";
export const url=new URL("../icons/watch_button_press-fill.svg?v=ff07c09d81803b975941085ab3dc1a237fa23b7d61b7c971ad3bd9391caf1aae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
