export const name="folder-lock";
export const id="dl_a0067b9de7e14c2e9659";
export const url=new URL("../icons/folder-lock.svg?v=8cd9bb1948d0a6074e39825f9db50466356ab66aaba9fa5268f0db27a681aefe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
