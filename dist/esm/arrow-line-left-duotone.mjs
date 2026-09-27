export const name="arrow-line-left-duotone";
export const id="dl_8627da9054a34f49bfbd";
export const url=new URL("../icons/arrow-line-left-duotone.svg?v=050322605c29cc6f009d262d9c4f772d20754eda316aeebb47c8105aca038591",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
