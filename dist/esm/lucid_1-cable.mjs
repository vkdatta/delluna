export const name="lucid_1-cable";
export const id="dl_328a82303a714ac0892c";
export const url=new URL("../icons/lucid_1-cable.svg?v=7d742b772b24c50b42698e5adc0f134fc5c4ad0805bfb3d1d5786dc312b5c88e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
