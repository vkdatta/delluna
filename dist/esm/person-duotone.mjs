export const name="person-duotone";
export const id="dl_ef81aea75e8243ba9b0a";
export const url=new URL("../icons/person-duotone.svg?v=760779cc95e2a5a030a995b4ea481e5421e39e876e91c308206f77d78bd8606a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
