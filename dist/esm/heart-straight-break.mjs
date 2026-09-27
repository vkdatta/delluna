export const name="heart-straight-break";
export const id="dl_97d0fd2b24174c0f99b3";
export const url=new URL("../icons/heart-straight-break.svg?v=e731ca478df17366414c55122daaa4464bf79ad81a539405cce9fe2a25dc8435",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
