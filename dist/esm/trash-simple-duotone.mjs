export const name="trash-simple-duotone";
export const id="dl_f1cedce09e30442bf60e";
export const url=new URL("../icons/trash-simple-duotone.svg?v=a297a54f50b0d0e54297ae6850823ce7acd83471260ade01666c75e45af7f9ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
