export const name="background_dot_large";
export const id="dl_590b75007debb3d712f1";
export const url=new URL("../icons/background_dot_large.svg?v=155fe2993cbac2fca4eb19d6af79240ff9db0edc8df7b5adced70553cc1248dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
