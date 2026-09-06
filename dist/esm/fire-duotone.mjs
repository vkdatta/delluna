export const name="fire-duotone";
export const id="dl_898ecd37c9274e0b8c4a";
export const url=new URL("../icons/fire-duotone.svg?v=f1346a9ca22fbf7a384920ffa9991549f0e37de320dd7425de705bcfe5b9c980",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
