export const name="selection-background-fill";
export const id="dl_0af0d8460c94b305d6f4";
export const url=new URL("../icons/selection-background-fill.svg?v=ab04a31407bf5ae295a24fdf967381a55c40350f7b40d7176db9069941f57387",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
