export const name="drone_2-fill";
export const id="dl_38ecbc3f308fa12cf929";
export const url=new URL("../icons/drone_2-fill.svg?v=c1b5056d45f5a899d7ed88deb9e306d22e7485095f96dbe7581f61770680b67c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
