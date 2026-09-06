export const name="ny-times-logo-bold";
export const id="dl_ca51b73672254f67b6ee";
export const url=new URL("../icons/ny-times-logo-bold.svg?v=e9a7a6f49b414b081ffd4c67bad73bf1ba9ad4d7f9b34b8f352fa58df11c7e11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
