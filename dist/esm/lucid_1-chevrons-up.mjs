export const name="lucid_1-chevrons-up";
export const id="dl_a72cf5ac64d044ed9865";
export const url=new URL("../icons/lucid_1-chevrons-up.svg?v=bbff6dd397191b4133fa5ecddd483e255a4ca7e92193cd553326eae5f06b5638",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
