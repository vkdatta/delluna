export const name="music-note-fill";
export const id="dl_cc74d46ff07d43a59dd4";
export const url=new URL("../icons/music-note-fill.svg?v=f5d81a8202673937e5ee705bb25e3bceff7aebee340402ba19ae233f39a79e7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
