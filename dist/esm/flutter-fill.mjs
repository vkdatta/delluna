export const name="flutter-fill";
export const id="dl_cb4cfdc6dea049beb49c";
export const url=new URL("../icons/F/flutter-fill.svg?v=e4a7767f936c3fc612ea6d73140e234fa6d7ca6b89d5daa47810e769714c6295",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
