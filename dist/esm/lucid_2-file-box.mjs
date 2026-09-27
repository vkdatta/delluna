export const name="lucid_2-file-box";
export const id="dl_a0203b428a6948e39036";
export const url=new URL("../icons/lucid_2-file-box.svg?v=b2969df9b5b17b1faa0ba2de1ded394f9a9c5026f5357e8d54b5722b24e366b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
