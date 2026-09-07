export const name="video-bold";
export const id="dl_95b737eb41a341c0bec6";
export const url=new URL("../icons/V/video-bold.svg?v=59afe6b2db9757840ef39758aedb50503d86f69ce54a29843bb577778058c342",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
