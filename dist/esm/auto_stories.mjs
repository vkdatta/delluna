export const name="auto_stories";
export const id="dl_79dc819e23f449a7bd39";
export const url=new URL("../icons/A/auto_stories.svg?v=825b064475d8b921a3950b674ceb306bfcec3a01650466ba974a343bcc8fe2b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
