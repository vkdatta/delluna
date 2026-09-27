export const name="timer_arrow_down";
export const id="dl_1f65b93033f521289701";
export const url=new URL("../icons/timer_arrow_down.svg?v=a602b71bd1a4480d88b718de559e97e91b7fa923da1b58d9be775de59ca88ea6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
