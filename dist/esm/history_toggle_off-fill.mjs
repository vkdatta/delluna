export const name="history_toggle_off-fill";
export const id="dl_3113800713fc0be4b78f";
export const url=new URL("../icons/history_toggle_off-fill.svg?v=569c3a6ff4965a63f6ffa0a84ccd77f19abfebd236a5680c7916e3c0d9957699",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
