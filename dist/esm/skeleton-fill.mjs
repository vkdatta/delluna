export const name="skeleton-fill";
export const id="dl_bf4ff4d9488c288df59e";
export const url=new URL("../icons/skeleton-fill.svg?v=a8c91d040843a827c790a882aaf58bbbf44db132f8484e2ca8ba7a5ddca2a249",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
