export const name="app-store-logo-thin";
export const id="dl_cd02fcf886694e29b772";
export const url=new URL("../icons/app-store-logo-thin.svg?v=a2e315d80d150374a89c5bab634a8afefca747b8f3fcffef12e29e0dc26f3081",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
