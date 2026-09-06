export const name="microsoft-excel-logo-light";
export const id="dl_94903cac73254e3790b4";
export const url=new URL("../icons/microsoft-excel-logo-light.svg?v=1e3c5b5447fe9f81a6b8492624ff428aac5912e7e071d4f86750ff742d3897dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
