export const name="user-sound-fill";
export const id="dl_3ee18a8ea134578bcdb9";
export const url=new URL("../icons/user-sound-fill.svg?v=2600af2312f8e75dba7fc858ee45c68756f4542ee64298c8485f79c69a7f1868",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
