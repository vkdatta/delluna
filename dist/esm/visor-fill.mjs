export const name="visor-fill";
export const id="dl_04dd9ce762f3672ec598";
export const url=new URL("../icons/visor-fill.svg?v=d6517dec5e29c52962731c407deb096539fdf7ee826e77cceee23f682169cf0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
