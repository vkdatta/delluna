export const name="checklist_rtl";
export const id="dl_a70759af5b8a48999143";
export const url=new URL("../icons/C/checklist_rtl.svg?v=4a7f506a2c5831517308f4afda06a9e2b68bfdfe6c6c4d8e967efa8764fedbb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
