export const name="lucid_1-chevrons-right";
export const id="dl_54b3e7b6a63e467e9b28";
export const url=new URL("../icons/lucid_1-chevrons-right.svg?v=05144d8d0b65a867c2652e8fde9b3738ed22a1c659e229d43b2ff4068578ee44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
