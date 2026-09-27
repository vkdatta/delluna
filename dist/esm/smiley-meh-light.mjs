export const name="smiley-meh-light";
export const id="dl_15d697c2a8013c58eea5";
export const url=new URL("../icons/smiley-meh-light.svg?v=b91981bd901d63338fd3e02a41755101c3ba312c0c66b29a7a5ec93a44af701d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
