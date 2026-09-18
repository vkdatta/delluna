export const name="replace_video";
export const id="dl_9d01ab81c29543e5b9c3";
export const url=new URL("../icons/R/replace_video.svg?v=fe269bbe65659cbf5706491a20d76a75d8e8b4da96d046d307ae74d12f5f71a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
