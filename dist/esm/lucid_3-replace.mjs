export const name="lucid_3-replace";
export const id="dl_47a486966a144f899f10";
export const url=new URL("../icons/lucid_3-replace.svg?v=1d34ab2dfcdddfd231cb29f33bcc7c76bc35ef057b82fc964fa669676b2952b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
