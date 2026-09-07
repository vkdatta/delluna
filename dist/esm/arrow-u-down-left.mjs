export const name="arrow-u-down-left";
export const id="dl_8e6fba00d6614d39a28b";
export const url=new URL("../icons/arrow-u-down-left.svg?v=55fcf6036cc0192eb2b4f96911c660f3fccc422a88274f893d41568a17b387d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
