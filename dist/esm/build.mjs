export const name="build";
export const id="dl_41aada521262f35cdc6f";
export const url=new URL("../icons/build.svg?v=034d07d290421566b30ce590ecbe9d5ecfa9d8aabe13bf460176e731fcee9e4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
