export const name="image_search";
export const id="dl_c1f80116fa2f052f255b";
export const url=new URL("../icons/image_search.svg?v=823e3d454cc98c57c61ab734fe79581d1763cc52ac9345dd83d350bcdf0b9ef4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
