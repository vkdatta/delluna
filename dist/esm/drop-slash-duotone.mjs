export const name="drop-slash-duotone";
export const id="dl_41b49981ed6a4f31bbb2";
export const url=new URL("../icons/drop-slash-duotone.svg?v=8b28fa41c1fe432d8f9530b387683bc3ec7ae5fe708f8b46b9a3e35ec36a21e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
