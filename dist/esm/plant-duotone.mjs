export const name="plant-duotone";
export const id="dl_98b0e42b7d7f4527b7aa";
export const url=new URL("../icons/plant-duotone.svg?v=aec1044b20c9b823aa3e23ddf846e2edafa8abd74d0fb039c9b384e36bb2a4df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
