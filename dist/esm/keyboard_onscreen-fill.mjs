export const name="keyboard_onscreen-fill";
export const id="dl_6949f1f23cdb6296f246";
export const url=new URL("../icons/keyboard_onscreen-fill.svg?v=c9c5f5803422f826ea8d8a396fb0ed60ac68d5f7ab06cc59681a479b4255ce7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
