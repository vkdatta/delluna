export const name="folder-simple-star-duotone";
export const id="dl_04ef5e991e144a998659";
export const url=new URL("../icons/folder-simple-star-duotone.svg?v=a5eea31b1a4c3469868794a710fb475e7d5b5679577beff8534530896d23353a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
