export const name="comment-fill";
export const id="dl_91f705b2a996556a575e";
export const url=new URL("../icons/comment-fill.svg?v=a3aea1e302f752bb4e9eb7997dbb1ca3808acd692888be693528bfc5a17e4d82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
