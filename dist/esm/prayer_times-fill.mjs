export const name="prayer_times-fill";
export const id="dl_71e3d4ce7f054df3b670";
export const url=new URL("../icons/P/prayer_times-fill.svg?v=ae27b1e4ceaa391c0277e715fe282d37aa18e83e3612ca3193dfadbb0502cf78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
