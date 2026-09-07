export const name="video-conference";
export const id="dl_cd0c62636e004ad49ada";
export const url=new URL("../icons/V/video-conference.svg?v=8c5ef871d8c7b8c91823591256aef2368924e734810c43dfdafb5588446a7cf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
