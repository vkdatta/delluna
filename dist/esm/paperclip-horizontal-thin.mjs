export const name="paperclip-horizontal-thin";
export const id="dl_17f571a7fbe84db0b49d";
export const url=new URL("../icons/paperclip-horizontal-thin.svg?v=3fcbc8beea15b6de75eb14580b88a12f43df3b2e017c4d4f9698fc516032ec21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
