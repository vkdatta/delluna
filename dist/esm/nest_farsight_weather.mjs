export const name="nest_farsight_weather";
export const id="dl_60b760aaa3a286fec6af";
export const url=new URL("../icons/nest_farsight_weather.svg?v=ac2266833e66cde8b9c87ddff3288b46415dcdfcd221dc5941c650162a8aff76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
