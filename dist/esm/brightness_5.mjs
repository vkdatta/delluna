export const name="brightness_5";
export const id="dl_58d0e767e4470a2ed95f";
export const url=new URL("../icons/brightness_5.svg?v=7af55ea9f69b79f571febe1da0a02e49b762fa7cb50d4283e1af30ffbdf9051e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
