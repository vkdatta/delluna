export const name="paperclip-duotone";
export const id="dl_475a0c9867db4b25b074";
export const url=new URL("../icons/paperclip-duotone.svg?v=2c9b602043357e9417bf392dcb49078fb69e57a6b461b52861c6be0efd60ff92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
