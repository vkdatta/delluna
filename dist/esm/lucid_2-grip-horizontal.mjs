export const name="lucid_2-grip-horizontal";
export const id="dl_d19a1f0bf0814b8495a1";
export const url=new URL("../icons/lucid_2-grip-horizontal.svg?v=0b60c2c60f333adbf0625dcbc59e20d9c4ab0778e077e93cfaf47c82ddfdb97a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
