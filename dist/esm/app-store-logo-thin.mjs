export const name="app-store-logo-thin";
export const id="dl_cd02fcf886694e29b772";
export const url=new URL("../icons/app-store-logo-thin.svg?v=96b7aadeb3468d62ffe536c9a3c78d14a872bc285952d9e502207c01cfaa5542",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
