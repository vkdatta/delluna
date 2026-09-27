export const name="cheer-fill";
export const id="dl_0ff0c8f33ee5f2b8febe";
export const url=new URL("../icons/cheer-fill.svg?v=26938b0b51e75b4b1313a7d45c3c414ac26a718f04d22d18d65cb9adeca0a52e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
