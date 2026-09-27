export const name="lucid_1-chevron-down";
export const id="dl_f924df015f37487cadaa";
export const url=new URL("../icons/lucid_1-chevron-down.svg?v=5b0386a35333ceca8a1ffc9a274ebc1a4c90a7c2ec8896483da30c66bb5749f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
