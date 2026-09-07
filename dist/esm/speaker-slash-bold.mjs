export const name="speaker-slash-bold";
export const id="dl_befbaba3df014b39b6ef";
export const url=new URL("../icons/S/speaker-slash-bold.svg?v=19f3d5a5a4b3012c43dbc712b9a48a81fb458ec4ba3f3a9a9565a0c6526ff315",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
