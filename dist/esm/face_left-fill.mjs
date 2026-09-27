export const name="face_left-fill";
export const id="dl_f53f4441e193fdd47d7a";
export const url=new URL("../icons/face_left-fill.svg?v=fc5bb444b4c6da20ae24dcdad35359009544e62918e581dc7be794f4afe29b60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
