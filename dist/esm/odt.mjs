export const name="odt";
export const id="dl_e2fa0d6e00304af58f51";
export const url=new URL("../icons/odt.svg?v=07405696bd7ced9c59f9fa030ec49c96dd419661bd3079de66f917fc6e69456b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
