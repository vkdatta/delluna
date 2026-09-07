export const name="lucid_1-cooking-pot";
export const id="dl_61aeb7651d2345b795c7";
export const url=new URL("../icons/lucid_1-cooking-pot.svg?v=aed103f195eb7b505afe05d6adfb7888e09182c9b8362a307e01967a1974cfba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
