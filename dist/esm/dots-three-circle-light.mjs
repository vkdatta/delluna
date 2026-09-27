export const name="dots-three-circle-light";
export const id="dl_2588190128a9429aaf36";
export const url=new URL("../icons/dots-three-circle-light.svg?v=db7a7ed2eabf8d3ffbc90c4c773646d09190e6c53dff43f024081010f167d2dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
