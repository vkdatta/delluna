export const name="inbox_text_share";
export const id="dl_06b3e0959e691dca0162";
export const url=new URL("../icons/inbox_text_share.svg?v=77e2963591db6dc35f0661d1f229926fc412fef8fa42dbb582f15badd0b04d15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
