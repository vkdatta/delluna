export const name="sliders-horizontal-bold";
export const id="dl_391ed7e96726b492b11a";
export const url=new URL("../icons/sliders-horizontal-bold.svg?v=80ba2b46bab81e98654434508a754531a347f238a89036a5c0269f8e088d1bf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
