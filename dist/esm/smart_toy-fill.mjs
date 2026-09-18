export const name="smart_toy-fill";
export const id="dl_e62fe6b8e5b545859823";
export const url=new URL("../icons/S/smart_toy-fill.svg?v=b8c9172ab0ba374920daa8630a8a935caccd57423b5dbe6f493e22d2e49f126a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
