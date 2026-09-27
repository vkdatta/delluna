export const name="boy";
export const id="dl_f2a10977be1f0416486c";
export const url=new URL("../icons/boy.svg?v=8e547cfd0b8036eacb582f61d298178972b8535b5707a53372d779def5715ba7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
