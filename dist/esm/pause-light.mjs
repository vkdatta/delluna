export const name="pause-light";
export const id="dl_f9872728d8ce45e480e7";
export const url=new URL("../icons/pause-light.svg?v=27b67c7adfa58d916846ff5ebde1f41a6492e07e8351e9cdd1704fe928fa132b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
