export const name="certificate-duotone";
export const id="dl_738afec8eb24434ebde7";
export const url=new URL("../icons/certificate-duotone.svg?v=a280274064cbb83a4d775ab7ac3ec494c44eff670b96e71eb8d82d36babd24f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
