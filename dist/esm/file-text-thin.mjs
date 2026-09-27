export const name="file-text-thin";
export const id="dl_98a5cb612abe4fcb8c8a";
export const url=new URL("../icons/file-text-thin.svg?v=ea3a142ca9fc56c1ae44f6261a881432957c8ea19daa43c3bc685cf4614f556a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
