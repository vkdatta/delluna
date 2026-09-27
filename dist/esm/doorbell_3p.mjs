export const name="doorbell_3p";
export const id="dl_0558c3098becfcfe7162";
export const url=new URL("../icons/doorbell_3p.svg?v=1ee3a5605bff44a501b994d5791d3d01978efdea1ffb64987d07cad6f26d60db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
