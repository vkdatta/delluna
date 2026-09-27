export const name="t-shirt-light";
export const id="dl_e046b04a5f5788a369b3";
export const url=new URL("../icons/t-shirt-light.svg?v=accdbfade3c5f941d9691484531b568e4c5f40d467d7b811bc4c4f98ae05f875",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
