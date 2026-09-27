export const name="dots-three-vertical-light";
export const id="dl_d6aa82b1fd5645739e8c";
export const url=new URL("../icons/dots-three-vertical-light.svg?v=70dc022b40ff51ac5b2034e4b3d0ac38906a75f04f7b791930e0f6db6240ad02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
