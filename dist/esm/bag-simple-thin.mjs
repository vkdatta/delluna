export const name="bag-simple-thin";
export const id="dl_8a0109bb863848b1ad9e";
export const url=new URL("../icons/bag-simple-thin.svg?v=841847cada41cd602a3dad22e08048ae857ad066ec1b02c95fb000e50d6e8db0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
