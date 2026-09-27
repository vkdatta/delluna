export const name="play_lesson";
export const id="dl_30bd83925c7967201c02";
export const url=new URL("../icons/play_lesson.svg?v=755596697db9e43295676ff6b8a73a04d6c9870608de6a0dfe798a182aaf7a83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
