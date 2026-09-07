export const name="package";
export const id="dl_86bb5bf5853144ed8c58";
export const url=new URL("../icons/package.svg?v=b190e7e8f5c6e68be08e9fca1310d0f2c341aa7f1384aa99457206fab755e1f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
