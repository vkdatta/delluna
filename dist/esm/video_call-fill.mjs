export const name="video_call-fill";
export const id="dl_bb81f1c806ac45ee9b62";
export const url=new URL("../icons/video_call-fill.svg?v=4bf66b4176c149afe212766d27c644fa85596f89267502d1c4c1f103e5460d82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
