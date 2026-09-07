export const name="shield-chevron-thin";
export const id="dl_cd7834f54d4e4760b214";
export const url=new URL("../icons/S/shield-chevron-thin.svg?v=df7e3ca6d20d508f5f205f6b217cc195edd2c236c0e603c3da0c7a76dc3b996b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
