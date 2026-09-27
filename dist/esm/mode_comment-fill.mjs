export const name="mode_comment-fill";
export const id="dl_d44c04de8bb6ba5ca0c1";
export const url=new URL("../icons/mode_comment-fill.svg?v=c6c4d4e582cb2588a5334a6895a0d6d98aea99c35c2cd021289775db1f78b086",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
