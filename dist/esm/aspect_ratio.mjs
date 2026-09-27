export const name="aspect_ratio";
export const id="dl_e85370fd908d0ecda106";
export const url=new URL("../icons/aspect_ratio.svg?v=24be807d326bc4e7a658e0bd7698dde132d5ae71772e7bc6723b11eb691850c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
