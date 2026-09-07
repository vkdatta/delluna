export const name="lucid_3-paper-bag";
export const id="dl_9dca327fd5d64a69a373";
export const url=new URL("../icons/lucid_3-paper-bag.svg?v=848a540f0057d4d12106cd3cfe680a6456bed8801cda15cbb4357ae50cf754a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
