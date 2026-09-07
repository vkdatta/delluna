export const name="bowl-steam-light";
export const id="dl_fbfb86fbdccd4ecdaac8";
export const url=new URL("../icons/bowl-steam-light.svg?v=bded99439a6f3771ce519ed52772341259d0e748cbccb6c2506c5f5eb3d4c719",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
