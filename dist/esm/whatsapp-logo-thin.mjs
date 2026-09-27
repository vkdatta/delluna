export const name="whatsapp-logo-thin";
export const id="dl_06a293e76f7f5c0e5332";
export const url=new URL("../icons/whatsapp-logo-thin.svg?v=f6d504b28c33c4a5753dab1175a97726fcb76931763b0d9976ea356a82e1a379",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
