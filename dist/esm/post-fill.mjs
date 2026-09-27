export const name="post-fill";
export const id="dl_51d1bcaf4d6abd996c39";
export const url=new URL("../icons/post-fill.svg?v=3a2cb94676bbde8473d66a1d94b3f51b649c7da2efc104ea5bb67b197aa2e967",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
