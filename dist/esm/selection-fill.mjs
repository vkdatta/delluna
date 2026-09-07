export const name="selection-fill";
export const id="dl_015537e5a94848738a9d";
export const url=new URL("../icons/S/selection-fill.svg?v=39c98d739e03eecf38da5ccceb1093ca3b45826ee98a187e99bac2c3923fd8a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
