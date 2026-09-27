export const name="track";
export const id="dl_3d11649ae6974ebc9749";
export const url=new URL("../icons/track.svg?v=ad93bb8404e26b228234ba460745bee9f66ae42448d930a608f8a777d4b6a1fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
