export const name="lightbulb-light";
export const id="dl_dbc515c6ad6649b6afdf";
export const url=new URL("../icons/lightbulb-light.svg?v=44a4d8c1f89c74ad57380103ed6ddf4b35d59c907fb9256e32770289668d5963",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
