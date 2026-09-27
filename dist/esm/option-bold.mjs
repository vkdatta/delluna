export const name="option-bold";
export const id="dl_28137dc0154640a4a563";
export const url=new URL("../icons/option-bold.svg?v=e4ac395c96c289302aaecc62e2ee428d563b46560f630f9c6eb31755899e6955",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
