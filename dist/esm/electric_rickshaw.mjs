export const name="electric_rickshaw";
export const id="dl_f150ca9242ea42acd0f5";
export const url=new URL("../icons/electric_rickshaw.svg?v=bd24df1ea594b4b7776f7e9f93c136ce034922bafb2f0ee01813ed9d0005c4f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
