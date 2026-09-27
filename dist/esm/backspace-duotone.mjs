export const name="backspace-duotone";
export const id="dl_7e969d8edd3642609be6";
export const url=new URL("../icons/backspace-duotone.svg?v=273cbafdeb37a0ae00853cd65a79cbf7a15bf19f8d7d819a2c0e07bcd4b34bc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
