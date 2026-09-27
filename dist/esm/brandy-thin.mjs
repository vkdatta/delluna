export const name="brandy-thin";
export const id="dl_59b5ea51df144d9bb591";
export const url=new URL("../icons/brandy-thin.svg?v=946926da92baf88eb9cf21e3c4a4308124fbcd86bef90188cc339e113b823a0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
