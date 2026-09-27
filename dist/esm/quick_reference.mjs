export const name="quick_reference";
export const id="dl_0f69832fc89fb0ca0d87";
export const url=new URL("../icons/quick_reference.svg?v=a4bb02fda10918347665fdc9e1c6b6a0dbee11ee4750e4b55a51d1a49f72c1fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
