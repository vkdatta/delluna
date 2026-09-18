export const name="music_cast-fill";
export const id="dl_c0a937e543c24b57b501";
export const url=new URL("../icons/music_cast-fill.svg?v=b140258b64e290264f2443e1b6def38cb778ca22fc70f034733b8efa869dec0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
