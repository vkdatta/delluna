export const name="lucid_3-panels-right-bottom";
export const id="dl_eca2b1a7179e4bd7a2b1";
export const url=new URL("../icons/lucid_3-panels-right-bottom.svg?v=4edb3d2badb52b00075a099ae90a061c18f3e40c453ec8145c969933b75b2b2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
