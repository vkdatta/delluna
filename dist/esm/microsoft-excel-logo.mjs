export const name="microsoft-excel-logo";
export const id="dl_5195e105d2164f7fb26e";
export const url=new URL("../icons/microsoft-excel-logo.svg?v=3f7f42ee3af3153a32409a1f6b256980606886d47d1c93ea5194bf23182cd36d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
