export const name="lucid_1-command";
export const id="dl_13a166a7c6ad4e109925";
export const url=new URL("../icons/lucid_1-command.svg?v=9e9af869b3f86a91eb65162f3c1088338beb1178c5349385078846b6091c6af7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
