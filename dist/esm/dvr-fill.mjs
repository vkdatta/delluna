export const name="dvr-fill";
export const id="dl_89699733b1156e942287";
export const url=new URL("../icons/dvr-fill.svg?v=a462e1467b76dfe84cdc2eb5e0f94a1dece089ef6c37f4cc48bd95be559c3918",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
