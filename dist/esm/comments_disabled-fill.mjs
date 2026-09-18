export const name="comments_disabled-fill";
export const id="dl_4b9909a6e2964f7c8c8c";
export const url=new URL("../icons/comments_disabled-fill.svg?v=1314cb77e938a0e1b6de7e7245912e8b7ca2cb9762f6cd0d8c1be120858f423b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
