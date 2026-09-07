export const name="users-three-thin";
export const id="dl_b3612dc3b16e47d5b28c";
export const url=new URL("../icons/U/users-three-thin.svg?v=dfb63f076fe489691781325afd4c592d28de62d214c0a0e69e747090d5ec886c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
