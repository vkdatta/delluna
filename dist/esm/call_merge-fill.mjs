export const name="call_merge-fill";
export const id="dl_8662ecad679f4eaa9279";
export const url=new URL("../icons/call_merge-fill.svg?v=41f3bd2d999b2ec84ee0e2a8e9b747c1452ff43c00edd6d4ac77d95c7bbd3f5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
