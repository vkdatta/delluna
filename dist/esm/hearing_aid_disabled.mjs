export const name="hearing_aid_disabled";
export const id="dl_39a75618b6864cada276";
export const url=new URL("../icons/hearing_aid_disabled.svg?v=68648cb4f9911b3a567fbe71e6d1f6e3780e801a9a352ce5e1caeebbb6daca94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
