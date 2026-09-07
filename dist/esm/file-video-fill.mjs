export const name="file-video-fill";
export const id="dl_f7d779b8ab0c4c7f8d21";
export const url=new URL("../icons/file-video-fill.svg?v=2940d83bf3560f389d6a826ca639741a9098d5bfe8910ea371fdc4c83790b827",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
