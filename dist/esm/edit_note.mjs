export const name="edit_note";
export const id="dl_7eae7cf2112bde6447d7";
export const url=new URL("../icons/edit_note.svg?v=ee61ca81833c5843ad1e3b4f83844e7628d0f4e45554ef562a0f061f236ba976",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
