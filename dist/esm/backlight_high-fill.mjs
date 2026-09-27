export const name="backlight_high-fill";
export const id="dl_59cea4efb66e58b10f17";
export const url=new URL("../icons/backlight_high-fill.svg?v=738c89edd7794a7e84cba673b04cc940ce30fa83a672ba338596e3bf551f905e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
