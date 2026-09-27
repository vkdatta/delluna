export const name="no_encryption-fill";
export const id="dl_85ddfce465adec4ab78d";
export const url=new URL("../icons/no_encryption-fill.svg?v=909608c71be12645e689feccb680b583908a3546b1c5a61d23e92adcef6660ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
