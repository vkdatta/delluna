export const name="smiley-blank-light";
export const id="dl_18c191a16a9f3984336f";
export const url=new URL("../icons/smiley-blank-light.svg?v=1692b1025b0debf3857e65fd823e9e7d44cd109b66443a27b70b68bc178904f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
