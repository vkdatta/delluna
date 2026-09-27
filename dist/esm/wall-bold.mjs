export const name="wall-bold";
export const id="dl_55c0abf96c35a082a250";
export const url=new URL("../icons/wall-bold.svg?v=bfe9cc27e750af3fc627d7288a76148d8d9c625bc1bca52f44a7ddf27401d950",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
