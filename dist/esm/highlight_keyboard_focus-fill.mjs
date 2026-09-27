export const name="highlight_keyboard_focus-fill";
export const id="dl_ec8976c0353cf99f4821";
export const url=new URL("../icons/highlight_keyboard_focus-fill.svg?v=e2ed154da57cd3add73ad2acb457494764a344f64f52bd92daa3b8468469273a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
