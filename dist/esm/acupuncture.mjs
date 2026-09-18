export const name="acupuncture";
export const id="dl_fff685fa3d7f45898820";
export const url=new URL("../icons/acupuncture.svg?v=456d09cbcd6fb8bf266b8de73caf20da181646e0057e692063ff756c81446f10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
