export const name="gradient";
export const id="dl_38f1febde70642a9b999";
export const url=new URL("../icons/gradient.svg?v=6cab1ae3c605feb647f80341983c178fdb16a30bc092d6d96d1ceb481cca6bbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
