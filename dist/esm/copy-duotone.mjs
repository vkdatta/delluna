export const name="copy-duotone";
export const id="dl_5c99c4d8d75748fa80bf";
export const url=new URL("../icons/copy-duotone.svg?v=35cdfa2857af7c8b81ee00bf440dd488cbe28c50c633534de7b7767333d05f4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
