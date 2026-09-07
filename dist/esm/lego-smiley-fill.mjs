export const name="lego-smiley-fill";
export const id="dl_de526e4653a146999487";
export const url=new URL("../icons/lego-smiley-fill.svg?v=0f0685d11556fdeb15bf320298b2b1706c485c027bf91d36c945f8b65342ef8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
