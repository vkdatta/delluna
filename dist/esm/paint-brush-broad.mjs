export const name="paint-brush-broad";
export const id="dl_9a22037aa7d84afb8ebe";
export const url=new URL("../icons/paint-brush-broad.svg?v=10d21e7dd28b4bf085dc7856e2bb94bfdb4e870d24f3e27148c5103fb60b6b8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
