export const name="unite-light";
export const id="dl_dd42d5c1f1314346a609";
export const url=new URL("../icons/U/unite-light.svg?v=e5ff25ac832a40837e786179ef1bae6fa73a2d77d0946bd15a4b290b599562db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
