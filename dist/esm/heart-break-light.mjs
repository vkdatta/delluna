export const name="heart-break-light";
export const id="dl_0dde3bf0ff6041658f57";
export const url=new URL("../icons/heart-break-light.svg?v=c6937935fa90126acd44c14f729b50bee4c4daa65897be93c85d031b8e40d2a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
