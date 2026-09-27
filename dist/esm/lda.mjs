export const name="lda";
export const id="dl_564472cf92f3a6e6c012";
export const url=new URL("../icons/lda.svg?v=870d8c39375cba0c1073c00fd54066f06a56fe4a2e764da24da906bd6761e446",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
