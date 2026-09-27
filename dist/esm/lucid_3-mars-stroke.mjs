export const name="lucid_3-mars-stroke";
export const id="dl_99b60625fdb4493ea976";
export const url=new URL("../icons/lucid_3-mars-stroke.svg?v=fc7144071049f0121a312d1db881adca73a4e9aac8702b154f94a92abeba0b60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
