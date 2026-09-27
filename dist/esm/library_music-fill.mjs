export const name="library_music-fill";
export const id="dl_43a597d9e9768546a98b";
export const url=new URL("../icons/library_music-fill.svg?v=4fd97573a3f708810779492b4b43cc960cd82d60624e1e0ba6a5a6dcd8cc2881",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
