export const name="beenhere";
export const id="dl_cff4009a44cb27e29dd1";
export const url=new URL("../icons/beenhere.svg?v=ae6580c5c1a80145c7796ef8426c26720212d1a0049c2762fda6b10d14bd5455",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
