export const name="play_lesson";
export const id="dl_8e70c1daf9354a7a8ae4";
export const url=new URL("../icons/P/play_lesson.svg?v=9cbb5ad968221b6b2743fb43c3156691d77a76b91345867d16ccc101fc18c720",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
