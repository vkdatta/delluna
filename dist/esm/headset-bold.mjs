export const name="headset-bold";
export const id="dl_fd0fa3ed67024c30adcc";
export const url=new URL("../icons/headset-bold.svg?v=0ee1829e6d6e47e318aff70671f65a2f030ce07b5e5a616f66378ef7e3b93972",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
