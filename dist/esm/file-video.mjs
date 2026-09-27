export const name="file-video";
export const id="dl_c81888ab21a8469cb9c8";
export const url=new URL("../icons/file-video.svg?v=5d5343df310cb5a5bb87b2e878c6f7270bc6b30ceae3e3097b7f9363ca574597",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
