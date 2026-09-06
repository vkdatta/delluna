export const name="avocado";
export const id="dl_5877d1724af547c0a908";
export const url=new URL("../icons/avocado.svg?v=65d98f5d900eb8951f5cddad64ee7f4bdb52e579dd30b620bc05cf6f3a26d6c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
