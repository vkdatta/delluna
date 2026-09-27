export const name="mail";
export const id="dl_30497b926a8d5a6a4c36";
export const url=new URL("../icons/mail.svg?v=94835b7f4a1b25f29fb87ab2ed000e5e24f077532ad703d527a9b0687662a4d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
