export const name="google-podcasts-logo";
export const id="dl_cf92f7b2354e4ed682f3";
export const url=new URL("../icons/google-podcasts-logo.svg?v=2d7e1da5c70ed49229a7a4e3cb27a3f12c358f3ce47b21e6e3b3517f91886306",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
