export const name="remove_moderator-fill";
export const id="dl_6385c990e20542a9b673";
export const url=new URL("../icons/R/remove_moderator-fill.svg?v=844d6b0cef31e9a69098a20c11ccfa53db860299c9f05fbd7e40e6221e5445b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
