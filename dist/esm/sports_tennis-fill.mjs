export const name="sports_tennis-fill";
export const id="dl_1fa34eb3b444689710cd";
export const url=new URL("../icons/sports_tennis-fill.svg?v=21e56bc42695779145c7f388d9a8c4b089d1e502955df1c1ed1159c7d6210de5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
