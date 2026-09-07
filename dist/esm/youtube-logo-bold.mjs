export const name="youtube-logo-bold";
export const id="dl_88420280db844e2eb232";
export const url=new URL("../icons/Y/youtube-logo-bold.svg?v=977885053fd2d1d6fefa272c62852793126591085a8eb79f5f4df374cc717d1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
