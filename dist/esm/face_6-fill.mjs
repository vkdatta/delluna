export const name="face_6-fill";
export const id="dl_34ac14b75f2b40938597";
export const url=new URL("../icons/face_6-fill.svg?v=dae8abc0eb98d62ef9fab861cef1c1f139b32c04f290853175fb1eec02eef8e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
