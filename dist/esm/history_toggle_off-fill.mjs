export const name="history_toggle_off-fill";
export const id="dl_2d8e3e444fb74d99b46b";
export const url=new URL("../icons/H/history_toggle_off-fill.svg?v=ab91efbc3894b6cd5e43ce0bf335f37bee2481d44be26b67e90162ae345dfcd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
