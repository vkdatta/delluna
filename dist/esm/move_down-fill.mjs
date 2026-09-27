export const name="move_down-fill";
export const id="dl_ecaa24c4f2ffb9936968";
export const url=new URL("../icons/move_down-fill.svg?v=f5d22e31a2fef050fa277ddb4d8de1ac19c9e3c019987a405253e1f95c2c8201",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
