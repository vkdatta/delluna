export const name="humidity_indoor";
export const id="dl_be2cda6ae9a6cdcd233d";
export const url=new URL("../icons/humidity_indoor.svg?v=7fa9b9a5da22bd8e678462a9bdca182d14a9d1ffeb4bf9852bc8e3a60020f94b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
