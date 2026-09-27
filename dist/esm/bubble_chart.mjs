export const name="bubble_chart";
export const id="dl_79476238514542a0bf0d";
export const url=new URL("../icons/bubble_chart.svg?v=21a0fc060ffa49f31275879ccb34b72057f4c899dba30e807107830045a02716",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
