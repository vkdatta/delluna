export const name="smiley-angry-thin";
export const id="dl_7d5db456a3904925afbf";
export const url=new URL("../icons/S/smiley-angry-thin.svg?v=be99cfb87eb1102d451b151b4f0537fc34d1799181e6348b40c4886b14951bf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
