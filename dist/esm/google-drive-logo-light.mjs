export const name="google-drive-logo-light";
export const id="dl_c6fa22e4f1f949f78db6";
export const url=new URL("../icons/google-drive-logo-light.svg?v=a6c4f8967869591cf41af99e542b07799aeee065aecf8fe9692c6d848de60368",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
