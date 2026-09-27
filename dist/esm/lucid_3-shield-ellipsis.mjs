export const name="lucid_3-shield-ellipsis";
export const id="dl_d231de1c72144b558a44";
export const url=new URL("../icons/lucid_3-shield-ellipsis.svg?v=17111d7b0db765842a4edc509c727b17072b8473402795d0a93fe3ad95a707a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
