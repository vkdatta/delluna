export const name="tty";
export const id="dl_73e0db171bffb7001a7d";
export const url=new URL("../icons/tty.svg?v=30ce5432da66d2542b5b375d4d9e7048085e64dc50b401d1a02a51df7b0c2dd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
