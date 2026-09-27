export const name="format_image_right-fill";
export const id="dl_9cb1a735821deca51d76";
export const url=new URL("../icons/format_image_right-fill.svg?v=9d70844b057cc0098716aa79ad56358cfbe2ec21bae4b0f9463e2cfce6654ef6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
