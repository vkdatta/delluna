export const name="lab_panel-fill";
export const id="dl_6dcfc2e4f0b941aba5e7";
export const url=new URL("../icons/lab_panel-fill.svg?v=f4a0d05170b366370617b85957a6fe0d9acc8174cf51c9fcdd480af82934fd81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
