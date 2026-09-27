export const name="format_color_reset-fill";
export const id="dl_65b1c7ad9440083ce1fc";
export const url=new URL("../icons/format_color_reset-fill.svg?v=beb02611c351fb5e88b73e7325fc253a455d5d256d21f116eafe8b35fb83349a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
