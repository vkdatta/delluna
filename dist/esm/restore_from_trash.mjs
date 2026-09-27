export const name="restore_from_trash";
export const id="dl_24fd7320ef90291118dc";
export const url=new URL("../icons/restore_from_trash.svg?v=9975e97eddbf0ede8d1a4db84bb209d4c8c42be80f91136e49bac150ab1957ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
