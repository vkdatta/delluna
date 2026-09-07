export const name="smiley-wink-light";
export const id="dl_61f88bcfe588438b8dcd";
export const url=new URL("../icons/S/smiley-wink-light.svg?v=f4f419ee3849e201af40f677cfb008308f6e5fba652f4b818dc6c226d99f4c65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
