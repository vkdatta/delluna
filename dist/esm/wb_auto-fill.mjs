export const name="wb_auto-fill";
export const id="dl_02f83011ac066c5a542f";
export const url=new URL("../icons/wb_auto-fill.svg?v=d905093edc181f30525e9a5bbb22793b551e7e860a589bc2756e6dbffb470902",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
