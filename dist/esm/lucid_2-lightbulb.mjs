export const name="lucid_2-lightbulb";
export const id="dl_7e4352b67eae48fb8ad5";
export const url=new URL("../icons/lucid_2-lightbulb.svg?v=2c7d59383552a1ab07ec3246469f23893916741d0c618c34b17dbd68b01878f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
