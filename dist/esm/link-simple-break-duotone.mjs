export const name="link-simple-break-duotone";
export const id="dl_ecb2a4a4cecb407895b8";
export const url=new URL("../icons/link-simple-break-duotone.svg?v=a34ecaa7a3202617bbeac288ce27946c0e1157ed5322ffb2e83f994f280385bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
