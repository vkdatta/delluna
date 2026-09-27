export const name="video-camera-thin";
export const id="dl_e7c35c70a0ebe2a68388";
export const url=new URL("../icons/video-camera-thin.svg?v=5c89fa893e7e07229f8a452ab7f60a6f1524274b893da60e8289aa824b73d7d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
