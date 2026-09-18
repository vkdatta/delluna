export const name="done_all";
export const id="dl_0d9c445a51384b8a916d";
export const url=new URL("../icons/done_all.svg?v=ac9db79127fa7a35438c024910823766669df829dd489702f2e8cf5cef5ed16a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
