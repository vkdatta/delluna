export const name="lucid_3-robot-vacuum";
export const id="dl_487e5787d3394740b289";
export const url=new URL("../icons/lucid_3-robot-vacuum.svg?v=c02700454caceae2c7568f4840ed03f52426dc46b6e9ec285064566ca1b1c374",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
