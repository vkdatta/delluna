export const name="flowsheet";
export const id="dl_67cf141f7e3a45d6b42b";
export const url=new URL("../icons/F/flowsheet.svg?v=aab5135353efab3782e4fea8eefda77232c159ca2c61c42f3ce11f558967fd48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
