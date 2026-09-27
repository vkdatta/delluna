export const name="checklist_rtl";
export const id="dl_2e05ce9af969168c284a";
export const url=new URL("../icons/checklist_rtl.svg?v=48ccb3d06b04ba3e13a4df79232a91ed923758575c927477a093661db0632d88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
