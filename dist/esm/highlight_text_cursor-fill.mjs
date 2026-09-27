export const name="highlight_text_cursor-fill";
export const id="dl_a7b0eb41a6891c3d9e2e";
export const url=new URL("../icons/highlight_text_cursor-fill.svg?v=4583641d5e83afc309409d8aad891eb4a658302f06823df2d8b180e16b300e67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
