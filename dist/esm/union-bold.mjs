export const name="union-bold";
export const id="dl_9f47e57bdfb71a6554aa";
export const url=new URL("../icons/union-bold.svg?v=089e841398cab8464b9cc5ec5afe9ada193f392691e9e1b818ba39f3d034fa29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
