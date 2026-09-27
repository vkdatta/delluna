export const name="pencil-simple-slash-light";
export const id="dl_198e5cf7013e47c3ad37";
export const url=new URL("../icons/pencil-simple-slash-light.svg?v=7dd0df870b7aca995730b23b6b491129ceb6de33fa6a2d76ecbdf74291307d29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
