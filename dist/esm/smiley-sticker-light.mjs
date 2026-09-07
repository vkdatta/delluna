export const name="smiley-sticker-light";
export const id="dl_52a2816a6ba7419ba3e0";
export const url=new URL("../icons/S/smiley-sticker-light.svg?v=88ad0a14fb217e449c2fb3d84bd319f5efc64cd4c9d6c0eed7491e140789bbd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
