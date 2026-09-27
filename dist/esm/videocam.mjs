export const name="videocam";
export const id="dl_c887eb8ed5a90743b153";
export const url=new URL("../icons/videocam.svg?v=cd8b52d7d19e2f85b4b463fd26f07e49c3e2b057166003a8da53702b1161610d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
