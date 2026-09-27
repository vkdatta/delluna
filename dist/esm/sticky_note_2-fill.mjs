export const name="sticky_note_2-fill";
export const id="dl_bbe2d728d6849d0df43c";
export const url=new URL("../icons/sticky_note_2-fill.svg?v=b1cf2edc9241b28fd1ea1a6e24f519f94439d7706613fc1b8ae92ad5d467d941",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
