export const name="lucid_2-ev-charger";
export const id="dl_a6981637765142d59d12";
export const url=new URL("../icons/lucid_2-ev-charger.svg?v=623339f6b9a1bfe490e98ec43b81e387ba7c0ae1e6c4cca8f983ae0525cc3e35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
