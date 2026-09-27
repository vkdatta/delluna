export const name="reset_tv";
export const id="dl_dfa5fdf6b0fb45aaec1d";
export const url=new URL("../icons/reset_tv.svg?v=3b538c7e8ecdd25b4c90ec358e1dabc661058237db1a1941b64b883894302918",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
