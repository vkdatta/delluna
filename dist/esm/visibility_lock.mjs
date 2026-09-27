export const name="visibility_lock";
export const id="dl_26cfd4ae4fd863cf6f92";
export const url=new URL("../icons/visibility_lock.svg?v=8cfc4f28507e5fd5723f99c641ed62797af056d004219d58c45f10bb8382df62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
