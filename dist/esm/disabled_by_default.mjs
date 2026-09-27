export const name="disabled_by_default";
export const id="dl_852b96d5605a962832ab";
export const url=new URL("../icons/disabled_by_default.svg?v=4bb4ffd8dbb029b041cac2f0425715b7206c18542189b90558b59f4176bc9aa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
