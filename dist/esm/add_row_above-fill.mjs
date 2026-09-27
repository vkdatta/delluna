export const name="add_row_above-fill";
export const id="dl_8123b544a310c50a17e2";
export const url=new URL("../icons/add_row_above-fill.svg?v=20ecccb02f540865f3a0862100ca3f4e281e0a822f5ea7ee5bb5cca54006110a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
