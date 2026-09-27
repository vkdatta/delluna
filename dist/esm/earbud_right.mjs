export const name="earbud_right";
export const id="dl_339cf99f4754c5daec4f";
export const url=new URL("../icons/earbud_right.svg?v=55fcbe1e52a06eee5b3e0b8c0e0af50cdc0df955b3188e4637667d3678658fbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
