export const name="media_output_off-fill";
export const id="dl_ddcb40c1dc481724b294";
export const url=new URL("../icons/media_output_off-fill.svg?v=ac43143da078a98e23b1cd87fc191fedf76a2c4ac14a40bb4a8e3bbdd8f29284",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
