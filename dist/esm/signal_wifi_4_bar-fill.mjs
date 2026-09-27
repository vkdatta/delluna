export const name="signal_wifi_4_bar-fill";
export const id="dl_5fe951938b146f3a87bb";
export const url=new URL("../icons/signal_wifi_4_bar-fill.svg?v=6849a8e12c310b3ef913c7b7e80ff528203e8efedfd3f8b4f5e21a9a6d5557fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
