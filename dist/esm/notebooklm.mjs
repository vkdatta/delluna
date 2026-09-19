export const name="notebooklm";
export const id="dl_ce958f1c244b4e85be0e";
export const url=new URL("../icons/notebooklm.svg?v=5db9037e4664bc39451ddacc209c99efc3b7c9f03b3146fdad9a9b0e8d6db312",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
