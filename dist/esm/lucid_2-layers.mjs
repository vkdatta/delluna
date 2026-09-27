export const name="lucid_2-layers";
export const id="dl_9711306679414b2eb497";
export const url=new URL("../icons/lucid_2-layers.svg?v=dcd20f2e27f86f7234ffa7839e0b2c30e8bd92a6b17a4eca47437f269e26f37d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
