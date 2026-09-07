export const name="lucid_3-rows-2";
export const id="dl_78cdb11404b34bd3b058";
export const url=new URL("../icons/lucid_3-rows-2.svg?v=cccee138a711040e559a39c84b0327535342b32a1c446e871f0c94da5202e156",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
