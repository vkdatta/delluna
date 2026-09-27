export const name="caret-circle-up";
export const id="dl_27650a5f1f1640b0a104";
export const url=new URL("../icons/caret-circle-up.svg?v=8e6ca7d2c56c4c4daec30fc85491fc77ce620167bce40742bba71a764e6079c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
