export const name="password-light";
export const id="dl_3dfb72b7eaad48e9b732";
export const url=new URL("../icons/password-light.svg?v=61305aa80e5f4680e725d1ba84b492202b54618c7b4be3a38e34b4f02c95a373",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
