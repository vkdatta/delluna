export const name="file-jpg-fill";
export const id="dl_44e40ce742584518a2c0";
export const url=new URL("../icons/file-jpg-fill.svg?v=b7a5f0af3bbe2268e4ec6a27ca189a8f18c14e8d4f5c643301ee1f6e87bd6578",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
