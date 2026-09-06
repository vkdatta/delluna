export const name="user-key";
export const id="dl_e85f39688162404198a3";
export const url=new URL("../icons/user-key.svg?v=06deaaaa2909b2ec379323198d7f881a3c46556d9ab36455aceee37b94ccdc8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
