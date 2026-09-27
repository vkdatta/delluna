export const name="format_italic";
export const id="dl_dc1a1ed84bf93ebbab06";
export const url=new URL("../icons/format_italic.svg?v=7ab2922dfa3e2e095ebdf8182f024af02496b4acadd34aaac7ddb017f845ab82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
