export const name="comments_disabled-fill";
export const id="dl_60917a7faa7dab0bf3f7";
export const url=new URL("../icons/comments_disabled-fill.svg?v=6d6d205c5c163757a04096cce3d72e24bc664d8b0358b9c25b03ee0843184a9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
