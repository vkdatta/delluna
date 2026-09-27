export const name="play_lesson";
export const id="dl_ac63e7ff4051ea891061";
export const url=new URL("../icons/play_lesson.svg?v=50c2f822a31ac58c46a60fcf98feba8c42f4c88928f295243d03eabff3bd4a5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
