export const name="checkbook";
export const id="dl_b4bc7168454346ec864d";
export const url=new URL("../icons/C/checkbook.svg?v=d2999614a73edf56fca28389f2ef977a1b6142686b3cfa0b46790f26b1941d6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
