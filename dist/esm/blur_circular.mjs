export const name="blur_circular";
export const id="dl_b317d6df9d164bd89fbe";
export const url=new URL("../icons/blur_circular.svg?v=0a4110747f77afefe5f3866dd2acac6d5c27615aa1629da57aa03d9b359dc038",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
