export const name="lucid_2-hand-coins";
export const id="dl_72eb8abceaa348eab5b8";
export const url=new URL("../icons/lucid_2-hand-coins.svg?v=b223071b25535efcc88b421f9b890b7bc2c88b6dec8651527d82a4856010a999",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
