export const name="picture_in_picture_alt-fill";
export const id="dl_3a0df0b8d41ee007bc3b";
export const url=new URL("../icons/picture_in_picture_alt-fill.svg?v=340af5a65e72008bc5032029ac9148bbb8295f618ecf0f32c3a1ec3bb0fafd81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
