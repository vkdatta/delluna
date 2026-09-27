export const name="highlight_keyboard_focus";
export const id="dl_5c7317c4cb70f382c206";
export const url=new URL("../icons/highlight_keyboard_focus.svg?v=46715fcfc225879d490d9a73525821057e6b45b359839f9e66f594903cf9ae5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
