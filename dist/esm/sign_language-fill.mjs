export const name="sign_language-fill";
export const id="dl_1feb33188955dde579d4";
export const url=new URL("../icons/sign_language-fill.svg?v=60e47de98238e924e78f1cd2e9f33fe762ddbed7cfe5aca714c91fbc274bf40f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
