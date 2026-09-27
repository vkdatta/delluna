export const name="speaker-simple-x";
export const id="dl_9cdac533be368f9fe875";
export const url=new URL("../icons/speaker-simple-x.svg?v=07fa0dc64ae6723d691f1fea8054b70f7c323df43c483dabee54c8751e553302",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
