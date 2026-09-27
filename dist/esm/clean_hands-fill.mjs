export const name="clean_hands-fill";
export const id="dl_238cddd5a109f47a49ff";
export const url=new URL("../icons/clean_hands-fill.svg?v=7116c7a3f0e0873717ea344f6b7dd66278d6584ff138ee78a723c30316d0ff9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
