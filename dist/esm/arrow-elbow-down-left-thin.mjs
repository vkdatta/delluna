export const name="arrow-elbow-down-left-thin";
export const id="dl_3f6273d0f22d46d796cb";
export const url=new URL("../icons/arrow-elbow-down-left-thin.svg?v=8b985509cec6c6f409a04bdbf5bfafd7e1c32951d034245541d548a0579d73ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
