export const name="gender-transgender";
export const id="dl_8359adadb3554bdab567";
export const url=new URL("../icons/gender-transgender.svg?v=ba6de315d5e04dcf540f945253f095ce52b70ceb9bcea989fb9d804a83c452a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
