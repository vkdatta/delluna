export const name="rows-plus-bottom-duotone";
export const id="dl_ddce48accd604921b2af";
export const url=new URL("../icons/rows-plus-bottom-duotone.svg?v=dd0af5c67a56e900d7b6448e0da5f8bd6e021c004c7f6c5cba6c838af2bf653a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
