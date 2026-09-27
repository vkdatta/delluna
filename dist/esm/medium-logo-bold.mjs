export const name="medium-logo-bold";
export const id="dl_84cd2633174d4a4c8ee2";
export const url=new URL("../icons/medium-logo-bold.svg?v=900789aadf42ce0cb617d4fcb7804aa16e0b1e659e164ee35c7b669c50706565",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
