export const name="lucid_3-rows-4";
export const id="dl_edb70d14c1fb475f8250";
export const url=new URL("../icons/lucid_3-rows-4.svg?v=da7a6444443b4505538dae21742d1ad7e63347f68cf70f4c2be36f267e9e0cb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
