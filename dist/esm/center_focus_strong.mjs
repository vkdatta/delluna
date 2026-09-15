export const name="center_focus_strong";
export const id="dl_4c7e9a90407f4ceea63b";
export const url=new URL("../icons/C/center_focus_strong.svg?v=ed4438c234b696f33019b59e113c3178e95b043583599fed3670c6ef1ba0712d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
