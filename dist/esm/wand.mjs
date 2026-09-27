export const name="wand";
export const id="dl_dd54abcefe064e298c36";
export const url=new URL("../icons/wand.svg?v=fbc2291083ae5e7b98ee039984429e0b425d00d6cd8b3f61c231c3df5225f686",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
