export const name="quick_phrases-fill";
export const id="dl_12198bb2fad4e57c0c56";
export const url=new URL("../icons/quick_phrases-fill.svg?v=22d264eeb6eb2af606f615bdc283a4fb9d6346643fd14121459144d3033dc959",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
