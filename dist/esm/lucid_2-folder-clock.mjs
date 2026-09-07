export const name="lucid_2-folder-clock";
export const id="dl_947bf4bd4eee426e8077";
export const url=new URL("../icons/lucid_2-folder-clock.svg?v=bc3277b8ab210f28c54f4bd94ee47b9384ddd9546a553ce92cf419e1ac8a8ac1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
