export const name="signal_cellular_3_bar-fill";
export const id="dl_5e3293032dec228b5313";
export const url=new URL("../icons/signal_cellular_3_bar-fill.svg?v=8218bcdf6767f94e5cf17b3490a9b806f7a572f393ef781a775eaadea83883fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
