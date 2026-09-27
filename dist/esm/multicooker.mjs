export const name="multicooker";
export const id="dl_03f3e3d04a692063702d";
export const url=new URL("../icons/multicooker.svg?v=3cb77dd490df7cd7aad35eec0b4b166ad53617a6e69b40792f018c046ec90c7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
