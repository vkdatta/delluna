export const name="device_swoosh_star";
export const id="dl_7bcc8370de3809b6adbe";
export const url=new URL("../icons/device_swoosh_star.svg?v=9815d7867ca174294adce35c314aeacc98c1ba0a84192aa5fa865c5525a34ce4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
