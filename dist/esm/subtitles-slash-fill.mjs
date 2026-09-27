export const name="subtitles-slash-fill";
export const id="dl_872a67557c1db2c392c4";
export const url=new URL("../icons/subtitles-slash-fill.svg?v=97f55028827a1f5b678917def49c49cd2a34d6093c555b94239abff23c649dbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
