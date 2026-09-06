export const name="eyes-duotone";
export const id="dl_d4c34cb175374290abcf";
export const url=new URL("../icons/eyes-duotone.svg?v=809a6daf19451c9e707fc17d237ce8f06e556f8a1745b31b64e7cf40945888f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
