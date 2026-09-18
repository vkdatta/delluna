export const name="wifi_find";
export const id="dl_ac8b2a20dc294f4980e1";
export const url=new URL("../icons/wifi_find.svg?v=2117973a482fc042417411df76eae15970e20a8fb9995160b74c93f0f458044b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
