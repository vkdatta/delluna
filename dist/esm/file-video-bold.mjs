export const name="file-video-bold";
export const id="dl_346e94b2d57c4efeb4ab";
export const url=new URL("../icons/file-video-bold.svg?v=908139333466da93b9efb795ea40ea55d1a450ade07ee47e26182f7d98dd6479",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
