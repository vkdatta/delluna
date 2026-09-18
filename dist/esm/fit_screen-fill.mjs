export const name="fit_screen-fill";
export const id="dl_1c9748d809674c468fed";
export const url=new URL("../icons/fit_screen-fill.svg?v=e1bc9e33a601185fc7b10ab03cc7c3fb7a0fbdeae4dd8a2ddd8883da2d2ce96b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
