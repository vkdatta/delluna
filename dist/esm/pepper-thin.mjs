export const name="pepper-thin";
export const id="dl_27c825e86d9e423b811d";
export const url=new URL("../icons/pepper-thin.svg?v=181bd3a58d0ee1e5a86af19775acd5f30bd4f551884e482ed08c911fccc76b14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
