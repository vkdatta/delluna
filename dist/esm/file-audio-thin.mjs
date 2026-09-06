export const name="file-audio-thin";
export const id="dl_a29dd139a41f4b5cb4ae";
export const url=new URL("../icons/file-audio-thin.svg?v=25540af2ab7580ba6276a42c098b29a10c4e77ec74d8da5e07e9c927960146b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
