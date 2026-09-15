export const name="build";
export const id="dl_3a03668fabe34455bd67";
export const url=new URL("../icons/B/build.svg?v=034d07d290421566b30ce590ecbe9d5ecfa9d8aabe13bf460176e731fcee9e4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
