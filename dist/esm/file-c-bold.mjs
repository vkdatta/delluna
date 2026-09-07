export const name="file-c-bold";
export const id="dl_ea697ae4ce8c492c9616";
export const url=new URL("../icons/file-c-bold.svg?v=817b0aec50d6e104e522d19f609f252de890724d045a4e3978dab254c004fa03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
