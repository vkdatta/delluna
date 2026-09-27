export const name="precision_manufacturing";
export const id="dl_75c00126315109c16322";
export const url=new URL("../icons/precision_manufacturing.svg?v=384103a7b3597ca17fc9b0f0b7fe5dce6f676dc6910d588b584dd577416b6297",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
