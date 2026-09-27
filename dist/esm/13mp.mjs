export const name="13mp";
export const id="dl_71bbb54ba5e0bf9f66ff";
export const url=new URL("../icons/13mp.svg?v=b271d0d7e0ad47b0a1167d7739567460495b5bde7c2a6af8acd4d0007f2f51c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
