export const name="folder-open-bold";
export const id="dl_ac8fe4bb4e3648ecb62f";
export const url=new URL("../icons/folder-open-bold.svg?v=a7eb8f25dde176db06b901a0b06b36f1723c24651e5c28e4fa0403f2a7624aba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
