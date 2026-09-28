export const name="2k";
export const id="dl_a6d0c8ddd15f0c30c231";
export const url=new URL("../icons/2k.svg?v=52a63e4b30b22dbb7051d4002137293c619374d03ade750f989da15491b9177a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
