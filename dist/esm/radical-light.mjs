export const name="radical-light";
export const id="dl_8d6cee84f6494c9ebe51";
export const url=new URL("../icons/radical-light.svg?v=3a4e6f34d40d6a61b1d6b6749c87dca435d1857d08a4cff611e1f2b7f377ba12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
