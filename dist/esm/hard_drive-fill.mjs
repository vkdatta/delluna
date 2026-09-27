export const name="hard_drive-fill";
export const id="dl_0e1ec1bef11c9eb80369";
export const url=new URL("../icons/hard_drive-fill.svg?v=da594ee898edff1ac484ecf02df13bd0ea058ef44c0f32289652832d0a87f11b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
