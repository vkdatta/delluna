export const name="stack_group";
export const id="dl_2254c9937a9a1385a390";
export const url=new URL("../icons/stack_group.svg?v=4f0eaa51a3b6cad5d861a6a68bb8fadf0efd3a6916d78cef19241729a22131ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
