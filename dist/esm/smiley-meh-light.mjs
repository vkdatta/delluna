export const name="smiley-meh-light";
export const id="dl_75616a55a68646c495a2";
export const url=new URL("../icons/S/smiley-meh-light.svg?v=b91981bd901d63338fd3e02a41755101c3ba312c0c66b29a7a5ec93a44af701d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
