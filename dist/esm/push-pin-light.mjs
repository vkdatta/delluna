export const name="push-pin-light";
export const id="dl_bb7ebaa762144e4e8b97";
export const url=new URL("../icons/push-pin-light.svg?v=f847c275c7bb6197c77674ed9fd313fe55226b74bd4b8fa63e5b3098b966af95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
