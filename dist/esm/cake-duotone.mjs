export const name="cake-duotone";
export const id="dl_c2ab0027138442ed99d0";
export const url=new URL("../icons/cake-duotone.svg?v=61f646f195b19d3bedd422b35baeb441cf68525b45ed8e3f8f47abbdfa9536a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
