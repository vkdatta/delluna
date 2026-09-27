export const name="folder-simple-star-thin";
export const id="dl_021dcf7efc784f54bc6a";
export const url=new URL("../icons/folder-simple-star-thin.svg?v=8aaaa6daa2274c0129199b30905087e43e81f353b32c05e5ea68a63a9516076f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
