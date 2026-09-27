export const name="share_windows-fill";
export const id="dl_8bbf9a162bb7cff8aa98";
export const url=new URL("../icons/share_windows-fill.svg?v=ded50815907d8cb6da8ddf3a0feed556ff85bf2d347d80d626147df306a5e502",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
