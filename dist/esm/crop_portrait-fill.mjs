export const name="crop_portrait-fill";
export const id="dl_759aafe37eced9d83786";
export const url=new URL("../icons/crop_portrait-fill.svg?v=8ff8e01a2ec1d7a91c26da9220e1ada09f16ee3f4ffdc705fb6e039b626ea19c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
