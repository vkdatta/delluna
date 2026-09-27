export const name="dots-three-outline-vertical-thin";
export const id="dl_71e8447891a74d39a8f8";
export const url=new URL("../icons/dots-three-outline-vertical-thin.svg?v=40cb425ec3d8f9d4a969be2966e8d7aa0c0b6c1f6d6f00e25125d8b7d1155c70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
