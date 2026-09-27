export const name="new_label-fill";
export const id="dl_c441235f56ce8bf85ee5";
export const url=new URL("../icons/new_label-fill.svg?v=22db7ddf0493379c68a9c509df6e820e2b559f0604d64532c8629149ee34b916",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
