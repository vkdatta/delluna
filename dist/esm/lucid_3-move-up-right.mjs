export const name="lucid_3-move-up-right";
export const id="dl_4bc9bbb9faa64b39b61a";
export const url=new URL("../icons/lucid_3-move-up-right.svg?v=4c7a4676a381257df80564f1ba95d5dedb10a883aeab107f6e90a33fcdccb2c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
