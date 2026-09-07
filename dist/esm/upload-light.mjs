export const name="upload-light";
export const id="dl_cdc5a54350fe4b529d8c";
export const url=new URL("../icons/U/upload-light.svg?v=c3be4820e81e329082c43aa8f69c25ecb2e01857b8f3ab98249a5845b610969b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
