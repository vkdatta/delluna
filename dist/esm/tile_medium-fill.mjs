export const name="tile_medium-fill";
export const id="dl_236d00a5aac4413a8f36";
export const url=new URL("../icons/T/tile_medium-fill.svg?v=e1bcc83af0429f5b45c4340b8c85b91f9cbb8266aeb167fef9c11e499d3dfe02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
