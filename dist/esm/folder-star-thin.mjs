export const name="folder-star-thin";
export const id="dl_ba6ba5f3739e41699716";
export const url=new URL("../icons/folder-star-thin.svg?v=3205ee315a5c4980ff59abdb23672be1b7415fcbd50cce543defe9dd50c77261",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
