export const name="arrow-bend-double-up-left";
export const id="dl_ebc143a812274120a666";
export const url=new URL("../icons/arrow-bend-double-up-left.svg?v=22a296786328cbd1829f69237059ec1c6044b2063f765571c6828e8b96259e91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
