export const name="screencast-bold";
export const id="dl_98fccbc52fc24c598885";
export const url=new URL("../icons/S/screencast-bold.svg?v=b6e54b413b7c1f9a5f8c066e2816a99f6c2cfa78561542fa5d5be021080666eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
