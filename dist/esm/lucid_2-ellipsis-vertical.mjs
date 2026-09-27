export const name="lucid_2-ellipsis-vertical";
export const id="dl_9b96c2d1fa304bd48a05";
export const url=new URL("../icons/lucid_2-ellipsis-vertical.svg?v=5f70784d8117db9b22015acf96e94689f013de6f68b592dd9a52eb78aa790b9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
