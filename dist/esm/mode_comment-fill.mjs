export const name="mode_comment-fill";
export const id="dl_303a92fffcc1d24a63ed";
export const url=new URL("../icons/mode_comment-fill.svg?v=1f8f4c0c7a9095fcdf432190d6c31e68e14b1dde826332c986cbbe2fb499d339",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
